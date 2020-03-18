import { Component, OnInit, Input } from '@angular/core';
import { Machine } from '../../../models/machine';

@Component({
  selector: 'app-machine-card',
  templateUrl: './machine-card.component.html',
  styleUrls: ['./machine-card.component.css']
})
export class MachineCardComponent implements OnInit {

  @Input() machine: Machine;
  @Input() iconPath: string;

  constructor() { }

  ngOnInit() {
  }

}
