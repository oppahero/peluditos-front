import { TestBed } from '@angular/core/testing';

import { LegalEntityApi } from './legal-entity-api';

describe('LegalEntityApi', () => {
  let service: LegalEntityApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegalEntityApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
