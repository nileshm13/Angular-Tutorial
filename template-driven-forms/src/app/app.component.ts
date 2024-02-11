import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-driven-form';
  @ViewChild('registrationForm') regForm: NgForm;
  genders = [
    { id: 'check-male', value: 'male', display: 'Male' },
    { id: 'check-female', value: 'female', display: 'Female' },
    { id: 'check-other', value: 'prefer not to say', display: 'Prefer not to say' }
  ];
  firstName: string;
  lastName: string;
  emailAddress: string;
  usernameBtnClicked: boolean = false;
  username: string;
  dateOfBirth: string;

  submitForm() {

    console.log(this.regForm);
    // //Printing from controls section of Form Controls 
    // console.log(this.regForm.controls["firstname"].value);
    // console.log(this.regForm.controls["lastname"].value);
    // console.log(this.regForm.controls["emailAdd"].value);
    // //Printing from values section of Form Contol
    // console.log(this.regForm.value.phoneNo);
    // console.log(this.regForm.value.dob);
    // console.log(this.regForm.value.usrname);
    // console.log(this.regForm.controls["firstname"]);
    // console.log(this.regForm.controls["lastname"]);
    // console.log(this.regForm.controls["emailAdd"]);
    
  }

  createUserName() {
    this.usernameBtnClicked = true;
    if (this.firstName && this.lastName && this.dateOfBirth) {
      if (this.firstName.length > 3) {
        this.username = this.firstName.slice(0, 3);
      }
      else {
        this.username = this.firstName;
      }

      if (this.lastName.length > 3) {
        this.username += this.lastName.slice(0, 3);
      }
      else {
        this.username += this.lastName;
      }

      let tmpDate = new Date(this.dateOfBirth);
      this.username += tmpDate.getFullYear();
    }
  }
}
