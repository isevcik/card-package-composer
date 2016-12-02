import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HomeComponent }  from './home.component';
import { PackageComponent }  from './package.component';
import { PackageEditComponent }  from './package-edit.component';

import { AppRouterModule } from './app-router.module';

@NgModule({
  imports:      [
	BrowserModule,
	AppRouterModule
  ],
  declarations: [
	AppComponent,
	HomeComponent,
	PackageComponent,
	PackageEditComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
