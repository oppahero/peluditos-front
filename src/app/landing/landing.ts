import { Component } from '@angular/core';
import { LandingHero } from './components/landing-hero/landing-hero';
import { LandingAboutUs } from './components/landing-about-us/landing-about-us';
import { LandingServices } from './components/landing-services/landing-services';
import { LandingTeam } from './components/landing-team/landing-team';
import { LandingFooter } from './components/landing-footer/landing-footer';

@Component({
  selector: 'app-landing',
  imports: [LandingHero, LandingAboutUs, LandingServices, LandingTeam, LandingFooter],
  templateUrl: './landing.html',
})
export class Landing {}
