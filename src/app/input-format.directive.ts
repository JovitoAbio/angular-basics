import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input('appInputFormat') format: string;

  value: string;

  constructor(private el: ElementRef) { }

  @HostListener('blur') onBlur() {
    this.value = this.el.nativeElement.value;

    if(this.format == 'lowercase')
      this.el.nativeElement.value = this.value.toLowerCase();
    else
      this.el.nativeElement.value = this.value.toUpperCase();
  }



}
