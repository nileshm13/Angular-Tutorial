import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  searchText: string = '';

  OnSearchTextChanged(value: string) {
    this.searchText = value;
  }
}
