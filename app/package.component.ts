import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Ng2TableModule } from 'ng2-table/ng2-table';

import { PackageService } from './package.service';
import { Package } from './package';

@Component({
	selector: 'package',
	moduleId: module.id,
	templateUrl: 'package.component.html'
})
export class PackageComponent {
	package: Package

	// storing sorted cards
	tableCards: Array<any>

	tableColumns:Array<any> = [
		{ title: 'Name', name: 'name' },
		{ title: 'Strength', name: 'strength' },
		{ title: 'Health', name: 'health' },
	]

	tableConfig:any = {
		sorting: { columns: this.tableColumns },
	}

	onChangeTable(config:any):any {
		if (config.sorting) {
			Object.assign(this.tableConfig.sorting, config.sorting);
			this.tableCards = this.sortData(this.package.includedCards, this.tableConfig);
		}
	}

	sortData(data:any, config:any):any {
		if (!config.sorting) {
			return data;
		}

		let columns = this.tableConfig.sorting.columns || [];
		let columnName:string = void 0;
		let sort:string = void 0;

		for (let i = 0; i < columns.length; i++) {
		if (columns[i].sort !== '' && columns[i].sort !== false) {
				columnName = columns[i].name;
				sort = columns[i].sort;
			}
		}

		if (!columnName) {
			return data;
		}

		// simple sorting
		return data.sort((previous:any, current:any) => {
			if (previous[columnName] > current[columnName]) {
				return sort === 'desc' ? -1 : 1;
			} else if (previous[columnName] < current[columnName]) {
				return sort === 'asc' ? -1 : 1;
			}

			return 0;
		});
	}

	constructor(
		private packageService: PackageService,
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.route.params.subscribe((params: Params) => {
			if (params['id']) {
				this.package = this.packageService.getPackage(params['id']);
				this.onChangeTable(this.tableConfig);
			}
		});
	}
};
