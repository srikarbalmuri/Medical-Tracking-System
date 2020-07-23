import { TestBed } from '@angular/core/testing';

import { SupportingstaffService } from './supportingstaff.service';

describe('SupportingstaffService', () => {
  let service: SupportingstaffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupportingstaffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
