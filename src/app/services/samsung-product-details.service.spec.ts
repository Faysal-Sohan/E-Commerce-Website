import { TestBed } from '@angular/core/testing';

import { SamsungProductDetailsService } from './samsung-product-details.service';

describe('SamsungProductDetailsService', () => {
  let service: SamsungProductDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SamsungProductDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
