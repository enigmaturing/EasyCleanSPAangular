import { Component, OnInit, Input } from '@angular/core';
import { MachineGroup } from 'src/app/models/machine-group';
import { Tariff } from 'src/app/models/tariff';

@Component({
  selector: 'app-machines-list',
  templateUrl: './machines-list.component.html',
  styleUrls: ['./machines-list.component.css']
})
export class MachinesListComponent implements OnInit {

  @Input() machineGroup: MachineGroup;

  isCollapsed = false;
  showNewTariff = false;

  closeFormNewTariff(showForm: boolean) {
    this.showNewTariff = showForm;
  }

  refreshTariffs(tariffs: Tariff[]) {
    this.machineGroup.tariffs = tariffs;
    this.showNewTariff = false;
  }

  ngOnInit() {}

}
