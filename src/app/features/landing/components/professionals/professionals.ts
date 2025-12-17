import {
  Component,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  ViewChildren,
  QueryList,
  ViewChild,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-professionals',
  imports: [],
  templateUrl: './professionals.html',
  styleUrls: ['./professionals.css'],
})
export class Professionals implements AfterViewInit, OnDestroy {
  @ViewChildren('animCard', { read: ElementRef }) cards!: QueryList<ElementRef>;
  @ViewChild('container', { static: true }) container!: ElementRef;

  private observer?: IntersectionObserver;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.playSequence();
            if (this.observer && this.container) {
              this.observer.unobserve(this.container.nativeElement);
            }
            break;
          }
        }
      },
      { threshold: 0.25 }
    );

    if (this.container && this.observer) {
      this.observer.observe(this.container.nativeElement);
    }
  }

  private playSequence(): void {
    const elems = this.cards.toArray();
    elems.forEach((el, index) => {
      setTimeout(() => {
        this.renderer.addClass(el.nativeElement, 'animate');
      }, index * 150);
    });
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
