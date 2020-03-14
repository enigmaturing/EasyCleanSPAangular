import { Component, OnInit } from '@angular/core';
import { Machine } from 'src/app/models/machine';
import { AlertifyService } from '../../../services/alertify.service';
import { MachineService } from 'src/app/services/machine.service';

@Component({
  selector: 'app-machines-list',
  templateUrl: './machines-list.component.html',
  styleUrls: ['./machines-list.component.css']
})
export class MachinesListComponent implements OnInit {

  machines: Machine[];

  constructor(private machineService: MachineService,
              private alertify: AlertifyService) { }

  loadMachines() {
    this.machineService.getMachines().subscribe((machines: Machine[]) => {
      this.machines = machines;
    }, error => {
      this.alertify.error(error);
    });
  }

  ngOnInit() {
    this.loadMachines();
  }


}
