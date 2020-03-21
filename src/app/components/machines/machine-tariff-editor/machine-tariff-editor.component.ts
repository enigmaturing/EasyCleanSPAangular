import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() closeFormNewTariff = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  createNewTariff() {
    console.log(this.newTariff);
    this.closeFormNewTariff.emit(false);
  }

}
