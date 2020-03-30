import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.css']
})
export class EmployeeRegisterComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();
  @Output() employeeCreated = new EventEmitter();

  model: any = {};
  
  constructor(private authService: AuthService,
              private alertify: AlertifyService) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe(next => {
      this.employeeCreated.emit();
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
