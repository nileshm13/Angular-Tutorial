import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[customDesignStyle]'
})
export class CustomDesignStyleDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  //Setting property name as selector name allows us to bind the directive name like property binding in template 
  @Input() set customDesignStyle(styleObj: Object) {
    let entries = Object.entries(styleObj);
    for (let item of entries) {
      let [styleProp, styleValue] = item;
      this.renderer.setStyle(this.element.nativeElement, styleProp, styleValue);
    }
  }
}
