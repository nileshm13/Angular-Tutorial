import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";

//this directive is assigned to span element in product details, can be assigned to any other div or other element as well
@Directive({
    selector: '[setBackground]'
})

export class SetBackground implements OnInit{
    //Assign selector name as alias to input property name, now it allows to use directive name in square bracket
    // with backgroundColor and textColor avaiable as properties
     @Input('setBackground') changeBackgroundAndTextColor: {backgroundColor: string , textColor: string}

     constructor(private element: ElementRef, private renderer: Renderer2)
     {    
     }

     ngOnInit()
     {
        //Values assigned to backgroundColor and color in DOM are getting dynamically assigned to span element
        this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.changeBackgroundAndTextColor.backgroundColor);
        this.renderer.setStyle(this.element.nativeElement, 'color', this.changeBackgroundAndTextColor.textColor);
     }
}