import { Component } from '@angular/core';
import { SubscriptionService } from 'src/app/Services/Subsciption.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  type: string = 'My Site for a month';
  //How to Provide Dependency Injection
  constructor(private subscriptionService: SubscriptionService) {
  }

  MonthlySubscription() {
    this.subscriptionService.OnSubscription(this.type);
  }
}
