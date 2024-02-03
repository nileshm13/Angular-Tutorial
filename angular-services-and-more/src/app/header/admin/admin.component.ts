import { Component, Inject } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})
export class AdminComponent {

  constructor(private userService: UserService) {

  }

  name: string = '';
  gender: string = 'Male';
  subType: string = 'Montly';
  status: string = 'Active';

  addNewUser() {
    this.userService.createUser(this.name, this.gender, this.subType, this.status);
    this.name = '';//clear textbox
  }
}
