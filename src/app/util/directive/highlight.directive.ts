import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() highlightColor: string;

  constructor(private el: ElementRef) {
    console.log(this.el);
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    if (color) {
      this.el.nativeElement.style.backgroundColor = this.highlightColor;
    } else {
      this.el.nativeElement.style.backgroundColor = color;
    }
  }
}
