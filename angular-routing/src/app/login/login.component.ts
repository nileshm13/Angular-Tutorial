import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string;
  password: string;
  authService: AuthService = inject(AuthService);
  route: Router = inject(Router);
  currentRoute: ActivatedRoute = inject(ActivatedRoute);
  isLoggedOut: boolean = false;

  loginUser() {
    let user = this.authService.login(this.userName, this.password);
    if (user) {
      alert('Login Successful, Welcome ' + user.name);
      this.route.navigate(['home']);
    }
    else {
      alert("Incorrect username or password, please try again");
    }
  }

  ngOnInit() {
    console.log(this.authService.isLogged);
    this.currentRoute.queryParamMap.subscribe((data) => {
      this.isLoggedOut = Boolean(data.get('logout'));
      if (this.isLoggedOut) {
        this.authService.logout();
        alert('You have been logged out: ');
      }
    })

  }
}
