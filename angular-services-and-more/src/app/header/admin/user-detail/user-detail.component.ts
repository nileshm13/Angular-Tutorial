import { Component, Inject, inject } from '@angular/core';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/Services/user.service';
import { USER_TOKEN } from 'src/app/app.module';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent {
  selectedUser: User;
  //This is a new way of injecting service in Angular (starting from version 14)
  constructor(@Inject(USER_TOKEN) private userService: UserService)
  {
    
  }
  //userService = inject(UserService)

  ngOnInit() {
    this.userService.selectedUserEvent.subscribe((data) => {
      this.selectedUser = data;
    })
  }
}
