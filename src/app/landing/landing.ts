import { Component } from '@angular/core';
import { LandingHero } from './components/landing-hero/landing-hero';

@Component({
  selector: 'app-landing',
  imports: [LandingHero],
  templateUrl: './landing.html',
})
export class Landing {}
