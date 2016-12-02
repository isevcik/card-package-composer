import { NgModule }				from '@angular/core';
import { RouterModule, Routes }	from '@angular/router';

import { HomeComponent }		from './home.component';
import { PackageComponent }		from './package.component';
import { PackageEditComponent }	from './package-edit.component';

const routes: Routes = [
  { path: '',					component: HomeComponent },
  { path: 'package/:id',		component: PackageComponent },
  { path: 'package-edit',		component: PackageEditComponent },
  { path: 'package-edit/:id',	component: PackageEditComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRouterModule { };
