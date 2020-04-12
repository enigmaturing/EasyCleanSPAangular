import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDetailed } from 'src/app/models/user-detailed';
import { AlertifyService } from 'src/app/services/alertify.service';
import { Topup } from '../../../models/topup';
import { SalesService } from 'src/app/services/sales.service';
import { AuthService } from 'src/app/services/auth.service';

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
              private authService: AuthService) { }

  ngOnInit() {
    this.loadUser();
  }

  loadUser() {
    this.route.data.subscribe(data => {
      this.user = data.clientDetails;
    });
  }

  topupAccount() {
    this.topup.userId = this.user.id;
    this.topup.employeeId = Number(this.authService.decodedToken.nameid);
    console.log(this.topup);
    this.salesService.topupClientAccount(this.topup).subscribe(next => {
      this.loadUser();
      this.alertify.success('The remaining amount of the user was sucessfully updated!');
    }, error => {
      this.alertify.error(error);
    });
  }
}
