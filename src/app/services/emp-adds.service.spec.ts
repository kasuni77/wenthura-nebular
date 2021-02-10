import { TestBed } from '@angular/core/testing';

import { EmpAddsService } from './emp-adds.service';

describe('EmpAddsService', () => {
  let service: EmpAddsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpAddsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
