import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/Models/course';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  courseId: number
  selectedCourse: Course;
  currentRoute: ActivatedRoute = inject(ActivatedRoute);
  courseService: CourseService = inject(CourseService);

  ngOnInit() {
    //this.courseId = this.currentRoute.snapshot.params['id'];  //old way of retreiving route params
    // console.log(this.courseId);
    //this.courseId = Number(this.currentRoute.snapshot.paramMap.get('id')); //newer and preferred way, returns string
    // console.log(this.courseId);

    //this.selectedCourse = this.courseService.courses.find(crs => crs.id === this.courseId);
    //console.log(this.selectedCourse);

    /*Above methods will not work in real time as ngOnInit is called only once,so courseId will be set only once, after this, if user navigates to next/prev page using buttons,
    courseId value will be incorrect and so page rendering will not change, just the url will change as its handled in html, to handle this, we use observables as below, this will emit 
    a new value on every page change and the subscription method will be called where logic on page change can be taken care of */
    this.currentRoute.paramMap.subscribe((data)=>
    {
      this.courseId = Number(data.get('id'));
      this.selectedCourse = this.courseService.courses.find(crs => crs.id === this.courseId);
    });

  }  
}
