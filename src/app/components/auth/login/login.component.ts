import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { AlertifyService } from '../../../services/alertify.service';
import { Router } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';

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
    options: AnimationOptions = {
      path: '/assets/lottie_files/laundry.json',
      loop: true
    };
    animationItem: AnimationItem;

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

    animationCreated(animationItem: AnimationItem) {
      this.animationItem = animationItem;
    }

}