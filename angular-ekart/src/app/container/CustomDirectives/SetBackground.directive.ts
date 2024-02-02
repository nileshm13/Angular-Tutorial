import { Directive, ElementRef, OnInit } from "@angular/core";

//this directive is assigned to span element in product details, can be assigned to any other div or other element as well
@Directive({
    selector: '[setBackground]'
})

export class SetBackground implements OnInit {
    // private element: ElementRef;
    //constructor(element: ElementRef) {
        constructor(private element: ElementRef) {  //this creates a private variable name element of type ElementRef and assigns whatever value gets injected(template reference variable), this removes the need of declaration above and assingment done on line next to this

        //this.element = element; // A quick way of assigning if as above
        // this.element.nativeElement.style.backgroundColor = 'Red';
        // this.element.nativeElement.style.color = 'Black';
        //As the properties of constructor are not yet initialzed, its best to call this inside ngOnInit
    }

    ngOnInit() {
        this.element.nativeElement.style.backgroundColor = '#36454F';
        this.element.nativeElement.style.color = 'White';
    }

}