import { Component, OnInit } from '@angular/core';
import { SalesService } from 'src/app/services/sales.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { MachineUsage } from 'src/app/models/machine-usage';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.css']
})
export class SalesListComponent implements OnInit {

  machineUsages: MachineUsage[];

  constructor(private salesService: SalesService,
              private alertify: AlertifyService) { }

  loadMachineUsages() {
    this.salesService.getMachineUsages().subscribe((machineUsages: MachineUsage[]) => {
      this.machineUsages = machineUsages;
      // console.log(this.machineUsages);
    }, error => {
      this.alertify.error(error);
    });
  }

  ngOnInit() {
    this.loadMachineUsages();
  }


}
