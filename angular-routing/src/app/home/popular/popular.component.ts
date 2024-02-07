import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/Models/course';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent {
  courseService = inject(CourseService)
  popularCourses: Course[] = [];
  route: Router = inject(Router);
  currentURL: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(){
    this.popularCourses = this.courseService.courses.filter(c => c.rating >= 4.5);    
  }

  openCourses() {
    //Its absolute. It accepts an array where we specify each route to be navigated so for localhost:4200/courses/python/3.5 , we specify this.route.navigate(['courses','python','3.5']); 
    // this.route.navigate(['courses']);
    // this.route.navigate(['courses','python','3.5']);

     //Its absolute. It accepts a string where we specify the link to be directed to, so for localhost:4200/courses/python/3.5 , we specify this.route.navigateByUrl('courses/python/3.5');
    //this.route.navigateByUrl('courses');
    //this.route.navigateByUrl('courses/python/3.5');

    //Both of above are absolute in nature by default but we can use navigateByUrl and provide relativeTo to provide redirection relative to a current url
    //relativeTo accepts type activatedRoute which specifies crurent url. 
    // To get current url, use ActivatedRoute --> currentURL: ActivatedRoute = inject(ActivatedRoute);
    this.route.navigate(['courses'], {relativeTo: this.currentURL }); //This will redirect to http://localhost:4200/home/courses
  }
}
