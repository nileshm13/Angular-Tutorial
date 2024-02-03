import { Component, inject } from '@angular/core';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent {
  selectedUser: User;
  //This is a new way of injecting service in Angular (starting from version 14)
  userService = inject(UserService)

  ngOnInit() {
    this.userService.selectedUserEvent.subscribe((data) => {
      this.selectedUser = data;
    })
  }
}
