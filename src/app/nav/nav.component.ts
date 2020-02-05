import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private authService: AuthService) { }

  model: any = {};

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      console.log('logged in successfully');
    }, error => {
      console.log('error on login');
    });
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;  // with !! we return true ONLY if something is stored into token
  }

  logout() {
    localStorage.removeItem('token');
    this.model.email = '';
    this.model.password = '';
    console.log('sucessfully logged out');
  }

}
