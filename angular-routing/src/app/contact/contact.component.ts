import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  firstName: string;
  lastName: string;
  country: string = 'USA';
  subject: string = '';
  isSubmitted: boolean = false;


  onSubmit() {
    this.isSubmitted = true;
    this.firstName = '';
    this.lastName = '';
    this.country = 'USA';
    this.subject = '';
  }

  onExit() {
    if ((this.firstName || this.lastName || this.subject) && !this.isSubmitted) {
      return confirm('You have some unchanged changes, are you sure you want to leave the page?')
    }
    else {
      return true;
    }
  }
}
