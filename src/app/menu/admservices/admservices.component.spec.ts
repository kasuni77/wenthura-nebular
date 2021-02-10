import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmservicesComponent } from './admservices.component';

describe('AdmservicesComponent', () => {
  let component: AdmservicesComponent;
  let fixture: ComponentFixture<AdmservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmservicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
