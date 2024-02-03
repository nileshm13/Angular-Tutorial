import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[customDesignClass]'
})
export class CustomDesignClassDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @Input() set customDesignClass(designObj: Object) {
    let entries = Object.entries(designObj);
    console.log(entries);
    for (let item of entries) {
      let [className, condition] = item;
      if (condition) {
        this.renderer.addClass(this.element.nativeElement, className)
      }
    }
  }
}
