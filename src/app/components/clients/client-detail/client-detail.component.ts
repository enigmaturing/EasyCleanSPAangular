import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDetailed } from 'src/app/models/user-detailed';
import { AlertifyService } from 'src/app/services/alertify.service';
import { Topup } from '../../../models/topup';
import { SalesService } from 'src/app/services/sales.service';
import { AuthService } from 'src/app/services/auth.service';
import { TabHeadingDirective } from 'ngx-bootstrap';
import { TopupDetailed } from '../../../models/topup-detailed';
import { MachineUsage } from '../../../models/machine-usage';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {

  user: UserDetailed;
  topup = {} as Topup;

  constructor(private route: ActivatedRoute,
              private alertify: AlertifyService,
              private salesService: SalesService,
              private userService: UserService,
              private authService: AuthService) { }

  ngOnInit() {
    this.loadUser();
  }

  loadUser() {
    this.route.data.subscribe(data => {
      this.user = data.clientDetails;
    });
  }

  refreshUser(clientId: number) {
    this.userService.getUser(clientId).subscribe((user: UserDetailed) => {
      this.user = user;
      console.log(user);
    }, error => {
      this.alertify.error(error);
    });
  }

  topupAccount() {
    this.topup.userId = this.user.id;
    this.topup.employeeId = Number(this.authService.decodedToken.nameid);
    this.salesService.topupClientAccount(this.topup).subscribe(next => {
      this.refreshUser(this.user.id);
      this.alertify.success('The remaining amount of the user was sucessfully updated!');
    }, error => {
      this.alertify.error(error);
    });
  }
}
