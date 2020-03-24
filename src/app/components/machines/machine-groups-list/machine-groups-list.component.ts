import { Component, OnInit } from '@angular/core';
import { MachineGroup } from 'src/app/models/machine-group';
import { MachineService } from 'src/app/services/machine.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-machine-groups-list',
  templateUrl: './machine-groups-list.component.html',
  styleUrls: ['./machine-groups-list.component.css']
})
export class MachineGroupsListComponent implements OnInit {

  machineGroups: MachineGroup[];

  constructor(private machineService: MachineService,
              private alertify: AlertifyService) { }

  loadMachineGroups() {
    this.machineService.getMachineGroups().subscribe((machineGroups: MachineGroup[]) => {
      this.machineGroups = machineGroups;
      // console.log(this.machineGroups);
    }, error => {
      this.alertify.error(error);
    });
  }

  ngOnInit() {
    this.loadMachineGroups();
  }

}
