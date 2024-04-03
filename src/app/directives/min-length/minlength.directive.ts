import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMinLength]'
})
export class MinLengthDirective {
  @Input()
  minLength!: number; // Minimum length required

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // Listen for input event to validate input value length
  ngOnInit() {
    this.renderer.listen(this.el.nativeElement, 'input', () => {
      const inputValue: string = this.el.nativeElement.value;
      if (inputValue.length < this.minLength) {
        // If input value length is less than minLength, set invalid class
        this.renderer.addClass(this.el.nativeElement, 'invalid');
      } else {
        // If input value length meets minimum requirement, remove invalid class
        this.renderer.removeClass(this.el.nativeElement, 'invalid');
      }
    });
  }
}
