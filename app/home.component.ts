import { Component } from '@angular/core';

import { PackageService } from './package.service';

@Component({
  selector: 'home',
  moduleId: module.id,
  templateUrl: 'home.component.html'
})
export class HomeComponent {
	constructor(private packageService: PackageService) {}

	generateDemoContent() {
		this.packageService.generateDemoPackages();
	}

	deleteAll() {
		this.packageService.clearAll();
	}
};