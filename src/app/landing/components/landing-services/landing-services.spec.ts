import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingServices } from './landing-services';

describe('LandingServices', () => {
  let component: LandingServices;
  let fixture: ComponentFixture<LandingServices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingServices]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingServices);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
