import { Component, inject } from '@angular/core';
import { SubscriptionService } from 'src/app/Services/Subsciption.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  providers: [SubscriptionService] //What to provide, like list of services that need to be injected in this class
})

export class HeroComponent {
  type: string = 'My Site premium content'
  //How to Provide Dependency Injection
  constructor(private subscriptionService: SubscriptionService) {

  }

  PremiumSubscription() {
    this.subscriptionService.OnSubscription(this.type);
  }

}
