import { TestBed } from '@angular/core/testing';

import { PetsApi } from './pets-api';

describe('PetsApi', () => {
  let service: PetsApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetsApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
