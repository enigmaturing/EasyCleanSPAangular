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

  logout() {
    localStorage.removeItem('token');
    this.model.email = '';
    this.model.password = '';
    this.alertify.message('sucessfully logged out');
    this.router.navigate(['/login']);
  }

}
