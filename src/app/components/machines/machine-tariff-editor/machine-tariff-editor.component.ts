import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MachineGroup } from 'src/app/models/machine-group';


@Component({
  selector: 'app-machine-tariff-editor',
  templateUrl: './machine-tariff-editor.component.html',
  styleUrls: ['./machine-tariff-editor.component.css']
})
export class MachineTariffEditorComponent implements OnInit {

  newTariff: any = {};

  @Input() machineGroup: MachineGroup;

  constructor() { }

  ngOnInit() {
  }

  createNewTariff() {
    console.log(this.newTariff);
  }

}
