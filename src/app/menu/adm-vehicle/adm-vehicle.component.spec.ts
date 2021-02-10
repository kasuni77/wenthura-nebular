import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmVehicleComponent } from './adm-vehicle.component';

describe('AdmVehicleComponent', () => {
  let component: AdmVehicleComponent;
  let fixture: ComponentFixture<AdmVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmVehicleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
