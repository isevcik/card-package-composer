import { NgModule }				from '@angular/core';
import { RouterModule, Routes }	from '@angular/router';

import { HomeComponent }		from './home.component';
import { PackageComponent }		from './package.component';
import { PackageEditComponent }	from './package-edit.component';
import { LoginComponent }		from './login.component';

import { AuthGuard }			from './auth-guard.service';

const routes: Routes = [
  { path: '',					component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'package/:id',		component: PackageComponent },	// package view is public
  { path: 'package-edit',		component: PackageEditComponent, canActivate: [AuthGuard] },
  { path: 'package-edit/:id',	component: PackageEditComponent, canActivate: [AuthGuard] },
  { path: 'login',				component: LoginComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRouterModule { };
