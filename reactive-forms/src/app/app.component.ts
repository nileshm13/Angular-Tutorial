import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'template-driven-form';
  employeeForm: FormGroup;

  ngOnInit() {
    this.employeeForm = new FormGroup({
      fname: new FormControl(null, Validators.required),
      lname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      usrname: new FormControl(null),
      dob: new FormControl(null),
      gender: new FormControl('male'),
      streetAddress: new FormControl(null),
      country: new FormControl('India'),
      city: new FormControl(null),
      region: new FormControl(null),
      postalCode: new FormControl(null),
      skills: new FormArray([
        //new FormControl(null),
      ])
    });
  }

  submitDetails() {
    console.log(this.employeeForm);
  }

} 
