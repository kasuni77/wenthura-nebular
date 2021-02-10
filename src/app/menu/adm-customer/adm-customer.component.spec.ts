import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmCustomerComponent } from './adm-customer.component';

describe('AdmCustomerComponent', () => {
  let component: AdmCustomerComponent;
  let fixture: ComponentFixture<AdmCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
