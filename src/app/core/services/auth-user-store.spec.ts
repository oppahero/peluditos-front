import { TestBed } from '@angular/core/testing';

import { AuthUserStore } from './auth-user-store';

describe('AuthUserStore', () => {
  let service: AuthUserStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthUserStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
