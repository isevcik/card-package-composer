import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { FormGroup, FormControl, AbstractControl } from '@angular/forms';

import { PackageService } from './package.service';
import { Package } from './package';
import { Card } from './card';
import { cardsDefinition } from './cards-definition';

@Component({
	selector: 'package-edit',
	moduleId: module.id,
	templateUrl: 'package-edit.component.html'
})
export class PackageEditComponent {
	// constants
	readonly nameMaxLength = 32
	readonly descMaxLength = 128
	readonly maxCardsNum = 5
	readonly maxCardsStrength = 20

	package: Package

	// controls
	form: FormGroup
	cards: AbstractControl[] = [];

	constructor(
		private packageService: PackageService,
		private route: ActivatedRoute
	) {}

	save(): void {
		if (this.form.valid) {
			// collect checked cards
			this.package.includedCards = this.cards.filter(c => c.value).map(c => c['cardDefinition']);
			this.packageService.savePackage(this.package);
		}
	}

	ngOnInit(): void {
		this.form = new FormGroup({
			'totalStrength': new FormControl('', MaxValidator(this.maxCardsStrength)),
			'totalCards': new FormControl('', MaxValidator(this.maxCardsNum)),
			'name': new FormControl(),
			'description': new FormControl()
		})

		// create cards checboxes from cards definition
		cardsDefinition.forEach(card => {
			var checkbox = new FormControl();
			checkbox['cardDefinition'] = card;
			checkbox.valueChanges.subscribe(() => {
				var selectedCards = this.cards.filter(c => c.value);
				var totalStrength = 0;

				selectedCards.forEach(c => totalStrength += c['cardDefinition'].strength);
				this.form.controls['totalStrength'].setValue(totalStrength);
				this.form.controls['totalCards'].setValue(selectedCards.length);
			});
			this.cards.push(checkbox);
		});

		this.route.params.subscribe((params: Params) => {
			if (params['id']) {
				this.package = this.packageService.getPackage(params['id']);
			} else {
				this.package = new Package();
			}
			this.cards.forEach(c => {
				c.setValue(this.package.includedCards.findIndex(i => {
					return i.index == c['cardDefinition'].index;
				}) + 1, { emitEvent: false });
			})
			// update one checkbox after all checkboxes were setted
			this.cards[0].updateValueAndValidity();
		});
	}
};

function MaxValidator(max: number) {
	return (control: any): {[key: string]: any} =>
	{
		if (control.value && control.value > max) {
			return {
				max: true
			}
		}

		return null;
	}
}
