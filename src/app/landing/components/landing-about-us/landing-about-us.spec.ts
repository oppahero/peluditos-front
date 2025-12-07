import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingAboutus } from './landing-about-us';

describe('LandingAboutus', () => {
  let component: LandingAboutus;
  let fixture: ComponentFixture<LandingAboutus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingAboutus],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingAboutus);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
