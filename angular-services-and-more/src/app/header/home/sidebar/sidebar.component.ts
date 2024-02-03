import { Component } from '@angular/core';
import { SubscriptionService } from 'src/app/Services/Subsciption.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  providers: [SubscriptionService] //What to provide, like list of services that need to be injected in this class
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
