// highlight.directive.ts

import { Directive, HostListener, ElementRef, Renderer2, Component } from '@angular/core';


@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight("initial");
  }

  private highlight(color: string) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', color);
  }

}
