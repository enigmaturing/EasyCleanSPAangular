import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MachineGroup } from 'src/app/models/machine-group';
import { AlertifyService } from '../../../services/alertify.service';


@Component({
  selector: 'app-machine-tariff-editor',
  templateUrl: './machine-tariff-editor.component.html',
  styleUrls: ['./machine-tariff-editor.component.css']
})
export class MachineTariffEditorComponent implements OnInit {

  newTariff: any = {};

  @Input() machineGroup: MachineGroup;
  @Output() closeFormNewTariff = new EventEmitter();

  constructor(private alertify: AlertifyService) { }

  ngOnInit() {
  }

  hideTariffForm() {
    this.closeFormNewTariff.emit(false);
  }

  createNewTariff() {
    console.log(this.newTariff);
    this.hideTariffForm();
    this.alertify.success('New tariff successfully created!');
  }

}
