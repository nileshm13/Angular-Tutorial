import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { Observable, exhaustMap, pipe, take } from "rxjs";
import { LoginService } from "./login.service";
import { UserModel } from "../Models/UserModel";

export class LoggingInterceptor implements HttpInterceptor {
    //Commented implementation works fine as well
    loginService = inject(LoginService);
    //user: UserModel;

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //take 1 unsubscribes observable after first subscription
        return this.loginService.loggedInUser.pipe(take(1), exhaustMap((user) => {
            if (user !== null) {
                console.log('Logging Interceptor called');
                let modifiedRequest = req.clone({ 'params': new HttpParams().set('auth', user.token) });
                return next.handle(modifiedRequest);
            }
            else {
                return next.handle(req);
            }
        }));

        // if (this.user !== null) {
        //     console.log('Logging Interceptor called');
        //     this.loginService.loggedInUser.subscribe((res) => { this.user = res; });
        //     let modifiedRequest = req.clone({ 'params': new HttpParams().set('auth', this.user.token) });
        //     console.log(modifiedRequest);
        //     return next.handle(modifiedRequest);
        // }
        // else{
        //     return next.handle(req);
        // }
    }
}