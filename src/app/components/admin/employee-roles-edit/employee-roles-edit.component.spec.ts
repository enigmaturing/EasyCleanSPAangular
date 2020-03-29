import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRolesEditComponent } from './employee-roles-edit.component';

describe('EmployeeRolesEditComponent', () => {
  let component: EmployeeRolesEditComponent;
  let fixture: ComponentFixture<EmployeeRolesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeRolesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeRolesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
