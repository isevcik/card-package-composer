import { Injectable } from '@angular/core';

import { Package } from './package';
import { Card } from './card';
import { cardsDefinition } from './cards-definition';

@Injectable()
export class PackageService {
	private loadPackages() {
		var packages = {};

		if (typeof localStorage["packages"] !== "undefined") {
			packages = JSON.parse(localStorage["packages"]);

			for (let p in packages) {
				var pack: Package = JSON.parse(packages[p]);
				packages[p] = pack;
			}
		}

		return packages;
	}

	private savePackages(packages: any) {
		for (let p in packages) {
			packages[p] = JSON.stringify(packages[p]);
		}

		localStorage["packages"] = JSON.stringify(packages);
	}

	private generatePackageId() {
		var id = 1;

		for (let p in this.loadPackages()) {
			id = Math.max(parseInt(p), id);
		}

		return id;
	}

	private getRandomInt(min: number, max: number) {
	  min = Math.ceil(min);
	  max = Math.floor(max);
	  return Math.floor(Math.random() * (max - min)) + min;
	}

	getPackage(id: number): Package {
		return this.loadPackages()[id];
	}

	savePackage(pack: Package): Package {
		if ( !pack.id ) {
			pack.id = this.generatePackageId();
		}

		var packages = this.loadPackages();
		packages[pack.id] = pack;
		this.savePackages(packages);

		return pack;
	}

	getAllPackages(): Package[] {
		var packages = this.loadPackages();

		return Object.keys(packages).map(key => packages[key]);
	}

	generateDemoPackages(): void {
		this.clearAll();

		for (let i=0; i<3; i++) {
			var pack = new Package();
			pack.name = "Package Nr. " + (i + 1);
			pack.description = "This is package Nr. " + (i + 1);

			var cardcount = this.getRandomInt(3, 10);
			for (let c=0; c<cardcount; c++) {
				pack.includedCards.push(cardsDefinition[c]);
			}

			this.savePackage(pack);
		}
	}

	clearAll(): void {
		localStorage.clear();
	}

};
