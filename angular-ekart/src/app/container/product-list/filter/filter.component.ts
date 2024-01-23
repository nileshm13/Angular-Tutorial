import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input()
  all: number = 0;
  @Input()
  inStock: number = 0;
  @Input()
  outOfStock: number = 0;
  @Output()
  selectedFilterBtn: EventEmitter<string> = new EventEmitter<string>;

  selectedFilter: string = 'all';

  onSelectedFilterChanged(value: string) {
    this.selectedFilterBtn.emit(value);
  }
}
