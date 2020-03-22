import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MachineGroup } from 'src/app/models/machine-group';
import { AlertifyService } from '../../../services/alertify.service';
import { Tariff } from 'src/app/models/tariff';
import { TariffService } from 'src/app/services/tariff.service';


@Component({
  selector: 'app-machine-tariff-editor',
  templateUrl: './machine-tariff-editor.component.html',
  styleUrls: ['./machine-tariff-editor.component.css']
})
export class MachineTariffEditorComponent implements OnInit {

  // Declare object of type Tariff and initialize it to null
  newTariff = {} as Tariff;

  @Input() machineGroup: MachineGroup;
  @Output() closeFormNewTariff = new EventEmitter();

  constructor(private alertify: AlertifyService,
              private tariffService: TariffService) { }

  ngOnInit() {
  }

  hideTariffForm() {
    this.closeFormNewTariff.emit(false);
  }

  createNewTariff() {
    this.newTariff.machineGroupId = this.machineGroup.id;
    this.newTariff.isActive = true;
    // console.log(this.newTariff);
    this.tariffService.storeTariffInDb(this.newTariff).subscribe(next => {
      this.hideTariffForm();
      this.alertify.success('New tariff successfully created!');
    }, error => {
      this.alertify.error(error);
    });

  }

}
