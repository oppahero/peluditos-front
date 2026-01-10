import { TestBed } from '@angular/core/testing';

import { NaturalPersonFacade } from './natural-person-facade';

describe('NaturalPersonFacade', () => {
  let service: NaturalPersonFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NaturalPersonFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
