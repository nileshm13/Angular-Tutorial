import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-container-example',
  templateUrl: './ng-container-example.component.html',
  styleUrls: ['./ng-container-example.component.css']
})
export class NgContainerExampleComponent {
  title = 'NG-CONTAINER';
  toggle: boolean = true;

  toggleContainer() {
    this.toggle = !this.toggle;
  }

}
