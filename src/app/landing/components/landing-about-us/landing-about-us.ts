import { Component, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Professionals } from '../professionals/professionals';

@Component({
  selector: 'app-landing-about-us',
  imports: [Professionals],
  templateUrl: './landing-about-us.html',
})
export class LandingAboutUs implements AfterViewInit, OnDestroy {
  @ViewChild('vetImg', { static: true }) vetImg!: ElementRef<HTMLElement>;

  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    if (!this.vetImg) return;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = this.vetImg.nativeElement as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.remove('opacity-0', 'translate-y-4');
            el.classList.add(
              'opacity-100',
              'translate-y-0',
              'animate-fadein',
              'animate-duration-700'
            );
            // once visible, we can unobserve to avoid repeating
            if (this.observer) this.observer.unobserve(el);
          }
        });
      },
      { threshold: 0.2 }
    );

    this.observer.observe(this.vetImg.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.observer && this.vetImg) {
      this.observer.unobserve(this.vetImg.nativeElement);
      this.observer.disconnect();
    }
  }
}
