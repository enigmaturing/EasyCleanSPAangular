import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { AlertifyService } from '../../../services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService,
              private alertify: AlertifyService,
              private router: Router) { }

    model: any = {};

    ngOnInit() {
    }

    login() {
    this.authService.login(this.model).subscribe(next => {
    this.alertify.success('logged in successfully');
    this.router.navigate(['/home']);
    }, error => {
    this.alertify.error(error);
    });
    }

}
