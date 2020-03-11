import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { AlertifyService } from '../../../services/alertify.service';
import { User } from '../../../models/user';
import { UserDetailed } from '../../../models/user-detailed';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService,
              private alertify: AlertifyService) { }

  loadUsers() {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    }, error => {
      this.alertify.error(error);
    });
  }

  ngOnInit() {
    this.loadUsers();
  }

}
