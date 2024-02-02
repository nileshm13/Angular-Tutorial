import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[apphover]'
})
export class ApphoverDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostBinding('style.backgroundColor') backgroundClr : string = '#28282B';
  @HostBinding('style.color') textClr : string = 'white';
  @HostBinding('style.border') border : string = 'none';

  @HostListener('mouseover') OnMouseOver()
  {
    this.backgroundClr = 'white';
    this.textClr = '#28282B';
    this.border = '#28282B 3px solid';
  }

  @HostListener('mouseleave') OnMouseLeave()
  {
    this.backgroundClr = '#28282B';
    this.textClr = 'white';
    this.border = 'none';
  }

}
