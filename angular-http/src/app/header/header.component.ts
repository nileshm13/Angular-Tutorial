import { Component, OnInit, inject } from '@angular/core';
import { LoginService } from '../Services/login.service';
import { UserModel } from '../Models/UserModel';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  loginService = inject(LoginService);

  ngOnInit() {
    this.loginService.loggedInUser.subscribe((user: UserModel) => {
      if (user !== null) {
        this.isLoggedIn = true;
      }
      else{
        this.isLoggedIn = false;
      }
    });
  }

  logOutUser()
  {
    this.loginService.logOut();    
  }
}
