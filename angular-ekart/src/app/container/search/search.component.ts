import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText: string = "";
  
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  updateSearchText(searchTextRef: any) {
    this.searchText = searchTextRef.value;  //Template Referencing the input textbox via searchTextRef; for template referencing, just use #name_of_your_choice besides an HTML element 
    this.searchTextChanged.emit(this.searchText);
    console.log(this.searchText);
  }
}
