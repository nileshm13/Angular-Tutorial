import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})

export class BannerComponent {
  searchText: string;
  route: Router = inject(Router);

  calledOnSomeBtnClickEvent() {
    //Query Params using navigate
    this.route.navigate(['courses'], { queryParams: { search: this.searchText } });
  }
}
