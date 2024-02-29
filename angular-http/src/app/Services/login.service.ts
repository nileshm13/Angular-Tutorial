import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { AuthUserRequest } from "../Models/AuthUserRequest";
import { BehaviorSubject, catchError, tap, throwError } from "rxjs";
import { getCurrencySymbol } from "@angular/common";
import { AuthUserResponse } from "../Models/AuthUserResponse";
import { UserModel } from "../Models/UserModel";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    http: HttpClient = inject(HttpClient);
    signupURL: string = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDGzQu3ifk4m5i_OYSAA24JttZ7846825s';
    loginURL: string = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDGzQu3ifk4m5i_OYSAA24JttZ7846825s';
    errorMsg: string;
    loggedInUser = new BehaviorSubject<UserModel>(null);
    router: Router = inject(Router);

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
        }),
            tap((response: AuthUserResponse) => {
                this.handleUserLogin(response);
            })
        );
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
        }),
            tap((response: AuthUserResponse) => {
                this.handleUserLogin(response);
            })
        )
    }

    private getRequest(username: string, password: string) {
        let data: AuthUserRequest = { email: username, password: password, returnSecureToken: true }
        return data;
    }

    private handleUserLogin(response: AuthUserResponse) {
        //expiresIn is total seconds returned as string, so converting it into milliseconds, and converting it into date format to get date time
        //when session is expected to expire
        let expiresInDate = new Date(new Date().getTime() + Number(response.expiresIn) * 1000);
        var user = new UserModel(response.localId, response.email, expiresInDate, response.idToken);
        this.loggedInUser.next(user);
        console.log(this.loggedInUser);
    }

    logOut()
    {
        this.loggedInUser.next(null);
        this.router.navigate(['login']);
    }
}