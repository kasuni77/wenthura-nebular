import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmEventComponent } from './adm-event.component';

describe('AdmEventComponent', () => {
  let component: AdmEventComponent;
  let fixture: ComponentFixture<AdmEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
