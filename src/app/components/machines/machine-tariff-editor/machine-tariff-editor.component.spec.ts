import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineTariffEditorComponent } from './machine-tariff-editor.component';

describe('MachineTariffEditorComponent', () => {
  let component: MachineTariffEditorComponent;
  let fixture: ComponentFixture<MachineTariffEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineTariffEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineTariffEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
