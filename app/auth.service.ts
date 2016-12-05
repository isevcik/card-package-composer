import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
	isLoggedIn: boolean = false;
	username?: string

	// store the URL so we can redirect after logging in
	redirectUrl: string;

	login(username: string): Observable<boolean> {
		// make fake delay, than login
		return Observable.of(true).delay(1000).do(val => {
			this.username = username;
			this.isLoggedIn = true
		});
	}

	logout(): void {
		this.isLoggedIn = false;
		this.username = null;
	}
}
