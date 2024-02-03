import { Component, Inject, inject } from '@angular/core';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/Services/user.service';
import { USER_TOKEN } from 'src/app/app.module';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
})
export class UserListComponent {
  constructor(@Inject(USER_TOKEN) private userService: UserService) {

  } 

  usersList = this.userService.getAllUsers();

  showUserDetail(user: User){
    this.userService.OnSelectedUserEvent(user);
  }

}
