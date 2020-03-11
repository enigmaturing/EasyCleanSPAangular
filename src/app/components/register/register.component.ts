import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AlertifyService } from '../../services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();

  model: any = {};

  constructor(private authService: AuthService,
              private alertify: AlertifyService) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe(next => {
      this.alertify.message('user was sucessfully registered!');
    }, error => {
      this.alertify.error(error);
    }
    );
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

}
