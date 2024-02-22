import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidator } from './Validators/custom.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'template-driven-form';
  employeeForm: FormGroup;
  employeeDetails: any = {};

  ngOnInit() {
    this.employeeForm = new FormGroup({
      fname: new FormControl(null, [Validators.required, CustomValidator.noSpace]),
      lname: new FormControl(null, [Validators.required, CustomValidator.noSpace]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      usrname: new FormControl(null, Validators.required, CustomValidator.usrNameAvailable),
      dob: new FormControl(null,Validators.required),
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

    //#region valueChanges
    // this.employeeForm.valueChanges.subscribe((data) => {
    //   console.log(data);
    // });

    // this.employeeForm.get('fname').valueChanges.subscribe((data) => {
    //   console.log(data);
    // });
    //#endregion

    //#region statusChanges
    // this.employeeForm.statusChanges.subscribe((data)=>{
    //   console.log(data);
    // });

    // this.employeeForm.get('fname').statusChanges.subscribe((data)=>{
    //   console.log(data);
    // });
    //#endregion
  }

  submitDetails() {
    console.log(this.employeeForm);
    //Assigning Form Value to an object
    this.employeeDetails = this.employeeForm.value;
    // console.log(this.employeeDetails);

    //Resetting a form
    this.employeeForm.reset({
      gender: 'male',
      address: {
        country: 'India'
      }
    });
  }

  addSkill() {
    //This returns an abstract control, but it does ont have push method which we need to push FC into employeeForm group so we typecast. We know return type of skills is FormArray.
    //this.employeeForm.get('skills');
    (<FormArray>this.employeeForm.get('skills')).push(new FormControl(null));
    console.log(this.employeeForm.get('skills'));
  }

  deleteSkill(index: number) {
    (<FormArray>this.employeeForm.get('skills')).removeAt(index);
  }

  createUserName() {
    var date = new Date();
    // //#region setValue for entire FormGroup
    // this.employeeForm.setValue({
    //   fname: this.employeeForm.get('fname').value,
    //   lname: this.employeeForm.get('lname').value,
    //   email: this.employeeForm.get('email').value,
    //   usrname: this.employeeForm.get('fname').value + this.employeeForm.get('lname').value + date.getMilliseconds().toString(),
    //   dob: this.employeeForm.get('dob').value,
    //   gender: this.employeeForm.get('gender').value,
    //   address: {
    //     streetAddress: this.employeeForm.get('address.streetAddress').value,
    //     country: this.employeeForm.get('address.country').value,
    //     city: this.employeeForm.get('address.city').value,
    //     region: this.employeeForm.get('address.region').value,
    //     postalCode: this.employeeForm.get('address.postalCode').value
    //   },
    //   skills: this.employeeForm.get('skills').value
    // });
    // //#endregion

    // //#region setValue for single FormControl
    // this.employeeForm.get('usrname').setValue(
    //   this.employeeForm.get('fname').value + this.employeeForm.get('lname').value + date.getMilliseconds().toString()
    // );
    // //#endRegion setValue for single FormControl

    //#region patchValue for FormGroup
    // this.employeeForm.patchValue({
    //   usrname: this.employeeForm.get('fname').value + this.employeeForm.get('lname').value + date.getMilliseconds().toString(),
    //   address: {
    //     region: 'Asia'
    //   }
    // });
    //#endregion

    //#region patchValue for FormControl
    this.employeeForm.get('usrname').patchValue(this.employeeForm.get('fname').value + this.employeeForm.get('lname').value + date.getMilliseconds().toString());
    //#endregion
  }
} 
