import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { Ng2TableModule } from 'ng2-table/ng2-table';

import { AppComponent }  from './app.component';
import { HomeComponent }  from './home.component';
import { PackageComponent }  from './package.component';
import { PackageEditComponent }  from './package-edit.component';

import { PackageService } from './package.service';

import { AppRouterModule } from './app-router.module';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		Ng2TableModule,
		AppRouterModule
	],
	declarations: [
		AppComponent,
		HomeComponent,
		PackageComponent,
		PackageEditComponent
	],
	providers: [
		PackageService
	],
	bootstrap:[
		AppComponent
	]
})
export class AppModule { }
