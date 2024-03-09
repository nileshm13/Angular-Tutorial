import { Component, OnInit, inject } from '@angular/core';
import { LoginService } from './Services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-http-client';
  loginService: LoginService = inject(LoginService);

  ngOnInit(): void {
    this.loginService.isLoggedIn();
  }
}
