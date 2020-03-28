import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AlertifyService } from '../services/alertify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router,
              private alertify: AlertifyService) {}

  canActivate(next: ActivatedRouteSnapshot): boolean {

    // Check if any of the roles passed in the route (see routes.ts) match
    // with any of the the roles stored in token (retrieved in the authService)
    const roles = next.data.roles as Array<string>; // roles passed in the route
    if (roles) {  // if the are roles available in the data of the path
      // Check if all the available roles in the data of the path match
      // with the roles of the user, retrieved from the JWT-Token
      const match = this.authService.roleMatch(roles);
      if (match) {
        return true;
      } else {
        this.alertify.error('You are not authorized to see this area');
        this.router.navigate(['']);  // navigate to home page
      }
    }

    if (this.authService.loggedIn()) {
      return true;
    }

    this.alertify.error('First login to access this zone');
    this.router.navigate(['/home']);
    return false;
  }

}
