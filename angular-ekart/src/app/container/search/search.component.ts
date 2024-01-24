import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText: string = "";
  
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('searchInputRef') searchInputElement: ElementRef
  // updateSearchText(searchTextRef: HTMLInputElement) {
  //Template Referencing the input textbox via searchTextRef; for template referencing, just use #name_of_your_choice besides an HTML element 
  //   this.searchText = searchTextRef.value;  
  //   this.searchTextChanged.emit(this.searchText);
  //   console.log(this.searchText);
  // }

  // Template Referencing used above will only be available on button click, but what if we need it as soon as page laod, for it we use @ViewChild
  // @ViewChild allows us to access DOM, Directive or Component
  //   ViewChild(selector: string | Function | ProviderToken<unknown>, opts?: {
  //     read?: any;
  //     static?: boolean;
  // }): any
  // selector - The directive type or the name used for querying.
  // read - Used to read a different token from the queried elements.
  // static - True to resolve query results before change detection runs, false to resolve after change detection. Defaults to false.

  updateSearchText() {
    this.searchText = this.searchInputElement.nativeElement.value;  //Template Referencing the input textbox via searchTextRef; for template referencing, just use #name_of_your_choice besides an HTML element 
    this.searchTextChanged.emit(this.searchText);
    console.log(this.searchText);
  }

}
