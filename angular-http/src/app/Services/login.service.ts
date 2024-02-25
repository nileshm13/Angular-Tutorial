import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { RegisterUserRequest } from "../Models/RegisterUserRequest";
import { catchError, throwError } from "rxjs";
import { getCurrencySymbol } from "@angular/common";

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    http: HttpClient = inject(HttpClient);
    signupURL: string = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDGzQu3ifk4m5i_OYSAA24JttZ7846825s';
    loginURL: string = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDGzQu3ifk4m5i_OYSAA24JttZ7846825s';
    errorMsg: string;

    registerNewUser(usrName: string, passwd: string) {
        let data = this.getRequest(usrName, passwd);
        return this.http.post(this.signupURL, data).pipe(catchError((err) => {
            this.errorMsg = "Unknown error occured, please contact support team"
            console.log(err);
            if (err.error && err.error.error) {
                switch (err.error.error.message) {
                    case "EMAIL_EXISTS": {
                        this.errorMsg = "Account already exists with this email address";
                        break;
                    }
                    case "OPERATION_NOT_ALLOWED": {
                        this.errorMsg = "This operation is not allowed, please contact support team"
                        break;
                    }
                    case "TOO_MANY_ATTEMPTS_TRY_LATER": {
                        this.errorMsg = "Too many failed attempts, please try again later"
                        break;
                    }
                }
            }
            console.log(this.errorMsg);
            //THROWERROR IS A CALLBACK WITHOUT {}   
            return throwError(() => this.errorMsg);
        }));
    }

    loginUser(usrName: string, passwd: string) {
        let data = this.getRequest(usrName, passwd);
        return this.http.post(this.loginURL, data).pipe(catchError((err) => {
            if (err.error && err.error.error) {
                switch (err.error.error.message) {
                    case 'EMAIL_NOT_FOUND': {
                        this.errorMsg = "No user found with specified email id"
                        break;
                    }
                    case 'INVALID_LOGIN_CREDENTIALS': {
                        this.errorMsg = "Username or Password is incorrect, please try again"
                        break;
                    }
                    case 'USER_DISABLED': {
                        this.errorMsg = "Account has been disabled by administrator, please contact support team"
                        break;
                    }
                }
            }
            return throwError(() => this.errorMsg);
        }))
    }

    private getRequest(username: string, password: string) {
        let data: RegisterUserRequest = { email: username, password: password, returnSecureToken: true }
        return data;
    }
}