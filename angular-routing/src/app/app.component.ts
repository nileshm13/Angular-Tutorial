import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, EventType, NavigationEnd, NavigationStart, Route, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular Routing';
  showSpinner: boolean = true;
  router: Router = inject(Router);

  ngOnInit() {
    //There are a lot of events that gets fired when we navigate from one route to other, we can use these events to decide if we want 
    // to perform an action of not, for example, stop loading spinner when: page is loaded/ there's an error on page/ page load is cancelled.
    //These events are accessible under Router library
    this.router.events.subscribe((navEvent) => {
      if (navEvent.type == EventType.NavigationStart) {
        this.showSpinner = true;
      }

      // navEvent instanceof NavigationEnd      
      if (navEvent.type === EventType.NavigationEnd || navEvent.type === EventType.NavigationCancel || navEvent.type === EventType.NavigationError) {
        this.showSpinner = false;
      }
    })
  }
}