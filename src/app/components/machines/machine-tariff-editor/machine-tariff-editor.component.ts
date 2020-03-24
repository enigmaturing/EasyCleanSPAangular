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
  @Output() submitFormNewTariff = new EventEmitter();

  constructor(private alertify: AlertifyService,
              private tariffService: TariffService) { }

  ngOnInit() {
  }

  hideTariffForm() {
    this.closeFormNewTariff.emit(false);
  }

  createNewTariff() {
    // The user does not give the machine group id in the formular, therefore
    // we must supply it in the next line
    this.newTariff.machineGroupId = this.machineGroup.id;
    this.newTariff.isActive = true;
    this.tariffService.storeTariffInDb(this.newTariff).subscribe(next => {
      this.refreshAvailableTariffs();
      this.alertify.success('New tariff successfully created!');
    }, error => {
      this.alertify.error(error);
    });
  }

  // This method is triggered from the method createNewTariff() the user submits
  // Its porpouse is to refresh the list of available tariffs after adding a new one
  refreshAvailableTariffs() {
    this.tariffService.getTariffsOfMachineGroup(this.machineGroup.id).subscribe((tariffs: Tariff[]) => {
      this.submitFormNewTariff.emit(tariffs);
    }, error => {
      this.alertify.error(error);
    });
  }

}
