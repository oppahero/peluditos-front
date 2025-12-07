import { Component } from '@angular/core';
import { LandingHero } from './components/landing-hero/landing-hero';
import { LandingAboutUs } from './components/landing-about-us/landing-about-us';

@Component({
  selector: 'app-landing',
  imports: [LandingHero, LandingAboutUs],
  templateUrl: './landing.html',
})
export class Landing {}
