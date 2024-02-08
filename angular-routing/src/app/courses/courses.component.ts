import { Component, OnInit, inject } from '@angular/core';
import { Course } from '../Models/course';
import { CourseService } from '../Services/course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  coursesService = inject(CourseService);
  AllCourses: Course[];
  currentRoute: ActivatedRoute = inject(ActivatedRoute);
  querySearchText: string

  ngOnInit() {
    this.currentRoute.queryParamMap.subscribe((data) => {
      this.querySearchText = data.get('search');  //Read query param value associated with search like ?search=Javascript
      if (this.querySearchText === null || this.querySearchText === '' || this.querySearchText === undefined) {
        this.AllCourses = this.coursesService.courses;
      }
      else {
        this.AllCourses = this.coursesService.courses.filter(crs =>
          crs.title.toLowerCase().includes(this.querySearchText.toLowerCase())
        )
      }
    })
  }
}

