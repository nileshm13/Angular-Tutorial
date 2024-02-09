import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    //Static data passed from router module using data property
    this.activatedRoute.data.subscribe((res) => {
      console.log(res);
    })
  }

}
