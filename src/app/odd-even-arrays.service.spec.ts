import { TestBed } from '@angular/core/testing';

import { OddEvenArraysService } from './odd-even-arrays.service';

describe('OddEvenArraysService', () => {
  let service: OddEvenArraysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OddEvenArraysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
