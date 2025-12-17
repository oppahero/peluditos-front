import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingAboutUs } from './landing-about-us';

describe('LandingAboutus', () => {
  let component: LandingAboutUs;
  let fixture: ComponentFixture<LandingAboutUs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingAboutUs],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingAboutUs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
