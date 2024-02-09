import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Course } from '../Models/course';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);
  course: Course;

  ngOnInit(): void {
    //Static data passed from router module using data property
    // this.activatedRoute.data.subscribe((res) => {
    //   console.log(res);
    // })

    //Dynamic data passed from routerLink of a component using [state]
    this.course = history.state;
    //console.log(this.router.getCurrentNavigation().extras.state); //This can be assigned in a constructor only 
  }

}
