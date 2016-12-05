import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
	selector: 'my-app',
	moduleId: module.id,
	templateUrl: 'app.component.html'
})
export class AppComponent  {
	constructor(public authService: AuthService, public router: Router) {}

	logout(): void {
		this.authService.logout();
		this.router.navigate(['/login']);

	}
}
