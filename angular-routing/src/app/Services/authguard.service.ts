import { Injectable, inject } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, Resolve, Router, RouterModule, RouterStateSnapshot, UrlTree, mapToCanActivate } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { ContactComponent } from "../contact/contact.component";
import { CoursesComponent } from "../courses/courses.component";
import { CourseService } from "./course.service";
import { Course } from "../Models/course";

//In order for canDeactivate to be reused across multiple components:
//Create an interface, export it so that it can be implemented across componenets, and specify a method declaration inside it with its return type
//Assign this interface as return type of Service method and to component parameter of canDeactivate method
export class IDeactivateComponent {
    onExit: () => boolean | Observable<boolean> | Promise<boolean>
}

//For canActivate, (this is v14 or below)
// 1. Create a service that inherits CanActivate
// 2. Implement canActivate() in service class, it should return boolean | Observable<boolean> | Promise<boolean>
// 3. Check inside this method if user is logged in or not
// 4. Add canActivate: [serviceClassName] in router.module.ts
@Injectable({
    'providedIn': 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild, CanDeactivate<IDeactivateComponent>, Resolve<Course[]>{
    authService: AuthService = inject(AuthService);
    route: Router = inject(Router);
    courseService: CourseService = inject(CourseService);

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        boolean | Observable<boolean> | Promise<boolean>//these are possible return types 
    {
        if (this.authService.isAuthenticated()) {
            return true;
        }
        else {
            this.route.navigate(['/login']);
            return false;
        }
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.canActivate(childRoute, state);  //rather than writing same code as above, calling the above method
    }

    canDeactivate(component: IDeactivateComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot) {
        return component.onExit();
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course[]> {
        //this.courseService = inject(CourseService);
        //As return type is courses, this data is accessible in activatedRoute
        return this.courseService.getAllcourses();
    }
}