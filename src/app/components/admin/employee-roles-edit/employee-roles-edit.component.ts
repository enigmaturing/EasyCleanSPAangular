import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-employee-roles-edit',
  templateUrl: './employee-roles-edit.component.html',
  styleUrls: ['./employee-roles-edit.component.css']
})
export class EmployeeRolesEditComponent implements OnInit {

  users: User[];

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.getUsersWithRoles();
  }

  getUsersWithRoles() {
    this.adminService.getUsersWithRoles().subscribe((users: User[]) => {
      this.users = users;
      console.log(this.users);
    }, error => {
      console.log(error);
    });
  }

}
