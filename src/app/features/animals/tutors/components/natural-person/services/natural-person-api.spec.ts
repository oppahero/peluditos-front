import { TestBed } from '@angular/core/testing';

import { NaturalPersonApi } from './natural-person-api';

describe('NaturalPersonApi', () => {
  let service: NaturalPersonApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NaturalPersonApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
