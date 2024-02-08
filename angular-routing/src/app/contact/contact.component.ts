import { Component } from '@angular/core';
import { IDeactivateComponent } from '../Services/authguard.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements IDeactivateComponent{
  firstName: string;
  lastName: string;
  country: string = 'USA';
  subject: string = '';

  onSubmit() {
    this.firstName = '';
    this.lastName = '';
    this.country = 'USA';
    this.subject = '';
  }

  onExit() {
    if (this.firstName || this.lastName || this.subject) {
      return confirm('You have some unchanged changes, are you sure you want to leave the page?')
    }
    else {
      return true;
    }
  }
}
