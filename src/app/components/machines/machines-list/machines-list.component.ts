import { Component, OnInit, Input } from '@angular/core';
import { MachineGroup } from 'src/app/models/machine-group';

@Component({
  selector: 'app-machines-list',
  templateUrl: './machines-list.component.html',
  styleUrls: ['./machines-list.component.css']
})
export class MachinesListComponent implements OnInit {

  @Input() machineGroup: MachineGroup;

  isCollapsed = false;

  ngOnInit() {}

}
