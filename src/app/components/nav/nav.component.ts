import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AlertifyService } from '../../services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public authService: AuthService,
              private alertify: AlertifyService,
              private router: Router) { }

  model: any = {};

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('logged in successfully');
      this.router.navigate(['/dashboard']);
    }, error => {
      this.alertify.error(error);
    });
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.model.email = '';
    this.model.password = '';
    this.alertify.message('sucessfully logged out');
    this.router.navigate(['/home']);
  }

}
