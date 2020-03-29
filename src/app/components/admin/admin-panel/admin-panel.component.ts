import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  registerVisible = false;

  constructor() { }

  registerToggle()
  {
    this.registerVisible = !this.registerVisible;
  }

  ngOnInit() {
  }

}
