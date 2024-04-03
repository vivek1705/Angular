import { Directive, ElementRef, HostListener } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Directive({
  selector: '[appCustomAnimation]'
})
export class CustomAnimationDirective {
  constructor(private elementRef: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.animate('in');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.animate('out');
  }

  private animate(state: string) {
    const element = this.elementRef.nativeElement;
    const animation = state === 'in' ?
      trigger('fadeInOut', [
        transition(':enter', [
          style({ opacity: 0 }),
          animate('1s', style({ opacity: 1 }))
        ]),
        transition(':leave', [
          animate('1s', style({ opacity: 0 }))
        ])
      ]) : null;

    animate(element);
  }
}
