import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./Services/auth.service";

//1. Create a callback function and assign it to a const variable of type boolean
//2. Assign this in routing module to canActivate property
export const canActivateGuard = () => {
    const authService: AuthService = inject(AuthService);
    const route: Router = inject(Router);
    if (authService.isAuthenticated()) {
        return true;
    }
    else {
        route.navigate(['/login']);
        return false;
    }
}

export const canActivateChildGuard = () => {
    return canActivateGuard();
}