import { Component, OnInit } from '@angular/core';

import { Package } from './package';
import { PackageService } from './package.service';

@Component({
  selector: 'home',
  moduleId: module.id,
  templateUrl: 'home.component.html'
})
export class HomeComponent {
	constructor(private packageService: PackageService) {}

	packages: Package[]

	getPackages(): void {
		this.packages = this.packageService.getAllPackages();
	}

	delete(pack: Package): void {
		this.packageService.deletePackage(pack);
		this.getPackages();
	}

	generateDemoContent(): void {
		this.packageService.generateDemoPackages();
		this.getPackages();
	}

	deleteAll(): void {
		this.packageService.clearAll();
		this.getPackages();
	}

	ngOnInit(): void {
		this.getPackages();
	}
};
