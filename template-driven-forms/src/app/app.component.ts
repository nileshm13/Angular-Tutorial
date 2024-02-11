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
  dateOfBirth: string;
  phoneNo: string;
  userName: string;
  userGender: string;
  line1Address: string;
  line2Address: string
  userCountry: string
  userCity: string
  userRegion: string
  postCode: string
  agreementSelected: boolean
  formSubmitted: boolean = false;

  submitForm() {
    this.formSubmitted = true;
    this.usernameBtnClicked = false;
    console.log("BEFORE RESET");
    console.log(this.regForm);
    console.log(this.firstName);
    console.log(this.lastName);
    console.log(this.emailAddress);
    console.log(this.phoneNo);
    console.log(this.dateOfBirth);
    console.log(this.userName);
    console.log(this.userGender);
    console.log(this.line1Address);
    console.log(this.line2Address);
    console.log(this.userCity);
    console.log(this.userCountry);
    console.log(this.userRegion);
    console.log(this.postCode);
    console.log(this.agreementSelected);
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

    this.regForm.reset();
    console.log("AFTER RESET");
    console.log(this.regForm);
    console.log(this.firstName);
    console.log(this.lastName);
    console.log(this.emailAddress);
    console.log(this.phoneNo);
    console.log(this.dateOfBirth);
    console.log(this.userName);
    console.log(this.userGender);
    console.log(this.line1Address);
    console.log(this.line2Address);
    console.log(this.userCity);
    console.log(this.userCountry);
    console.log(this.userRegion);
    console.log(this.postCode);
    console.log(this.agreementSelected);
  }

  createUserName() {
    this.usernameBtnClicked = true;
    if (this.firstName && this.lastName && this.dateOfBirth) {
      let username = "";
      if (this.firstName.length > 3) {
        username = this.firstName.slice(0, 3);
      }
      else {
        username = this.firstName;
      }

      if (this.lastName.length > 3) {
        username += this.lastName.slice(0, 3);
      }
      else {
        username += this.lastName;
      }

      let tmpDate = new Date(this.dateOfBirth);
      username += tmpDate.getFullYear();
      //this.regForm.value.usrname = username;

      //Assigning Value using SetValue (If we use ngModel, this might not be required, for knowledge purpose we are using it)
      // this.regForm.setValue({
      //   firstname: this.regForm.value.firstname,
      //   lastname: this.regForm.value.lastname,
      //   phoneNo: this.regForm.value.phoneNo,
      //   dob: this.regForm.value.dob,
      //   usrname: username,
      //   emailAdd: this.regForm.value.emailAdd,
      //   adressSection: {
      //     addressLine1: this.regForm.value.adressSection.addressLine1,
      //     addressLine2: this.regForm.value.adressSection.addressLine2,
      //     country: this.regForm.value.adressSection.country,
      //     city: this.regForm.value.adressSection.city,
      //     region: this.regForm.value.adressSection.region,
      //     postalCode: this.regForm.value.adressSection.postalCode,
      //   },
      //   agreement: this.regForm.value.agreement,
      //   gender: this.regForm.value.gender
      // });

      //Assigning Value using PatchValue
      this.regForm.form.patchValue({
        usrname: username,
        adressSection: {
          region: "Indian Subcontinent"
        }
      })

    }
  }
}
