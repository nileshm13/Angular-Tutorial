import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.currentRoute.fragment.subscribe((data) => {
      if (data) {
        document.getElementById(data).scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}
