import { Component, Inject, ViewChild, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../Services/login.service';
import { AuthUserResponse } from '../Models/AuthUserResponse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoginMode: boolean = true;
  @ViewChild('loginRegisterForm') loginRegisterForm: NgForm
  emailAddress: string;
  password: string;
  loginService: LoginService = inject(LoginService);
  isLoading: boolean = false;
  errorMessage: string;
  router: Router = inject(Router);

  changeMode() {
    this.isLoginMode = !this.isLoginMode;
    this.emailAddress = this.password = "";
  }

  submitDetails() {
    if (this.isLoginMode) {
      this.isLoading = true;
      this.loginService.loginUser(this.emailAddress, this.password).subscribe({
        next: (res) => {
          this.isLoading = false;
          console.log('Login Successful');
          this.router.navigate(['']);
        },
        error: (err) => {
          this.isLoading = false;
          this.setErrorMessage(err);
        }
      });
    }
    else {
      this.isLoading = true;
      this.loginService.registerNewUser(this.emailAddress, this.password).subscribe({
        next: (res: AuthUserResponse) => {
          this.isLoading = false;
          this.router.navigate(['']);
        },
        error: (err) => {
          this.setErrorMessage(err);
          this.isLoading = false;
        }
      });
    }
  }

  private setErrorMessage(errMsg: string) {
    this.errorMessage = errMsg;

    setTimeout(() => {
      this.errorMessage = null;
    }, 3000);
  }
}