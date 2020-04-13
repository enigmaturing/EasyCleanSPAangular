import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../models/user';

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.css']
})
export class ClientCardComponent implements OnInit {

  @Input() user: User;
  remainingCreditRounded: number;

  constructor() { }

  ngOnInit() {
    this.remainingCreditRounded = Math.round((this.user.remainingCredit + 0.00001) * 100) / 100;
  }

}
