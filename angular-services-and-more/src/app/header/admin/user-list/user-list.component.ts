import { Component, Inject } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
})
export class UserListComponent {
  constructor(private userService: UserService) {

  } 

  usersList = this.userService.getAllUsers();

}
