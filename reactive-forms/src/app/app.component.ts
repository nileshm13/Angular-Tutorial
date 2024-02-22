import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidator } from './Validators/no-space.validator';

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
      fname: new FormControl(null, [Validators.required, CustomValidator.noSpace]),
      lname: new FormControl(null, [Validators.required, CustomValidator.noSpace]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      usrname: new FormControl(null),
      dob: new FormControl(null),
      gender: new FormControl('male'),
      address: new FormGroup({
        streetAddress: new FormControl(null, Validators.required),
        country: new FormControl('India'),
        city: new FormControl(null, Validators.required),
        region: new FormControl(null),
        postalCode: new FormControl(null, Validators.required)
      }),
      skills: new FormArray([
        new FormControl(null, Validators.required)
      ])
    });
  }

  submitDetails() {
    console.log(this.employeeForm);
  }

  addSkill() {
    //This returns an abstract control, but  it does ont have push method which we need to push FC into employeeForm group so we typecast. We know return type of skills is FormArray.
    //this.employeeForm.get('skills');
    (<FormArray>this.employeeForm.get('skills')).push(new FormControl(null));
    console.log(this.employeeForm.get('skills'));
  }

  deleteSkill(index: number) {
    (<FormArray>this.employeeForm.get('skills')).removeAt(index);
  }

} 
