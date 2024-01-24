import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  searchText: string = '';
  showNgTemplate: boolean = false;
  showNgContainer: boolean = false;
  @ViewChild('product-list') productListComponent : ProductListComponent 

  OnSearchTextChanged(value: string) {
    this.searchText = value;
  }
}
