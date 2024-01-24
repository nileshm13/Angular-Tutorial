import { Component, ContentChild, ContentChildren, ElementRef, QueryList } from '@angular/core';

@Component({
  selector: 'featured-brands',
  templateUrl: './featured-brands.component.html',
  styleUrls: ['./featured-brands.component.css']
})
export class FeaturedBrandsComponent {
  @ContentChild('description1') paraElement1: ElementRef;  
  //There are two "Content projected" p Tags having same reference variable description2, so only the first one will be referenced, First match is referenced
  @ContentChild('description2') paraElement2: ElementRef;
  //Fetches all the "Content-projected" elements having template reference variable description and returns result as an array data type 
  @ContentChildren('description') paraElements: QueryList<ElementRef>;

  ngOnInit() {
    console.log(this.paraElement1);//undefined
    console.log(this.paraElement2);//undefined
  }

  showValue() {
    console.log(this.paraElement1.nativeElement);
    console.log(this.paraElement2.nativeElement);//Only first reference matching gets displayed
    console.log(this.paraElements); //There are 2 div having #description as template reference, both gets assigned here
    this.paraElements.forEach((elem) => {
      console.log(elem.nativeElement);
    });
  }
}
