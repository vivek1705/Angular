import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.showTooltip();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hideTooltip();
  }

  private showTooltip() {
    const tooltip = this.renderer.createElement('div');
    this.renderer.addClass(tooltip, 'tooltip');
    const text = this.renderer.createText('This is a tooltip');
    this.renderer.appendChild(tooltip, text);
    const parent = this.renderer.parentNode(this.el.nativeElement);
    this.renderer.appendChild(parent, tooltip);
  }

  private hideTooltip() {
    const tooltip = this.renderer.nextSibling(this.el.nativeElement);
    if (tooltip && tooltip.classList.contains('tooltip')) {
      this.renderer.removeChild(this.renderer.parentNode(this.el.nativeElement), tooltip);
    }
  }
}
