import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

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
	nameMaxLength = 32
	descMaxLength = 128

	package: Package
	cardsDefinition: Card[] = cardsDefinition

	constructor(
		private packageService: PackageService,
		private route: ActivatedRoute
	) {}

	save(): void {
		console.log("save()");
	}

	ngOnInit(): void {
		this.route.params.subscribe((params: Params) => {
			if (params['id']) {
				this.package = this.packageService.getPackage(params['id']);
			} else {
				this.package = new Package();
			}
		});
	}
};
