import { TestBed } from '@angular/core/testing';

import { CajeroServiceService } from './cajero-service.service';

describe('CajeroServiceService', () => {
  let service: CajeroServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CajeroServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
