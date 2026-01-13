import { TestBed } from '@angular/core/testing';

import { LegalEntityFacade } from './legal-entity-facade';

describe('LegalEntityFacade', () => {
  let service: LegalEntityFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegalEntityFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
