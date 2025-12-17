import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingTeam } from './landing-team';

describe('LandingTeam', () => {
  let component: LandingTeam;
  let fixture: ComponentFixture<LandingTeam>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingTeam]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingTeam);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
