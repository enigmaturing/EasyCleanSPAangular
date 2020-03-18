import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineGroupsListComponent } from './machine-groups-list.component';

describe('MachineGroupsListComponent', () => {
  let component: MachineGroupsListComponent;
  let fixture: ComponentFixture<MachineGroupsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineGroupsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineGroupsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
