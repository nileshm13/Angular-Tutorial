import { Injectable, inject } from "@angular/core";
import { User } from "../Models/user";
import { UserService } from "./user.service";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    isLogged: boolean = false;
    user: User = null;
    userService: UserService = inject(UserService);

    login(username: string, password: string) {
        this.user = this.userService.users.find((us) =>
            us.username === username && us.password === password
        );
        console.log(this.user);

        if (this.user) {
            this.isLogged = true;
        }
        else {
            this.isLogged = false;
        }
        return this.user;
    }

    logout() {
        this.isLogged = false;
    }

    isAuthenticated() {
        return this.isLogged;
    }

}