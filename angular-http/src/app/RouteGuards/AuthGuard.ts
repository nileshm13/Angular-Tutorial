import { inject } from "@angular/core";
import { LoginService } from "../Services/login.service"
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { map, take } from "rxjs";

export const canActivateRoute = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    let loginService: LoginService = inject(LoginService);
    let routeRedirect = inject(Router);

    return loginService.loggedInUser.pipe(take(1), map((user) => {
        let isLoggedIn = user ? true : false;
        if (isLoggedIn) {
            return true
        }
        else {
            return routeRedirect.createUrlTree(['/login']);
        }
    })
    )
}