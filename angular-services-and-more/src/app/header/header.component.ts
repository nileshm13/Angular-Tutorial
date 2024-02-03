import { Component } from '@angular/core';
import { SubscriptionService } from '../Services/Subsciption.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  providers: [SubscriptionService] //What to provide, like list of services that need to be injected in this class
})
export class HeaderComponent {
  selectedTab: string = 'home';
  type: string = 'My Site'

  //How to Provide Dependency Injection
  constructor(private subscriptionService: SubscriptionService) {
  }

  //When HOME Link is clicked
  HomeClicked() {
    this.selectedTab = 'home';
  }

  //When Admin Link is clicked
  AdminClicked() {
    this.selectedTab = 'admin';
  }

  MySiteSubscription() {
    this.subscriptionService.OnSubscription(this.type);
  }
}
