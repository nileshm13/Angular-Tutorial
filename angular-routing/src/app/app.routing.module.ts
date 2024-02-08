import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { CourseDetailComponent } from "./courses/course-detail/course-detail.component";
import { CoursesComponent } from "./courses/courses.component";
import { HomeComponent } from "./home/home.component";
import { PopularComponent } from "./home/popular/popular.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { LoginComponent } from "./login/login.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { AuthGuardService } from "./Services/authguard.service";
import { canActivateChildGuard, canActivateGuard } from "./new-auth-guard";

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent, canDeactivate: [AuthGuardService] },
    // { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent, canDeactivate: [AuthGuardService] },
    { path: 'courses', component: CoursesComponent },
    {
        path: 'courses', canActivateChild: [canActivateChildGuard], children: [
            { path: 'course/:id', component: CourseDetailComponent },
            { path: 'popular', component: PopularComponent },
            { path: 'checkout', component: CheckoutComponent }
        ]
    },
    // { path: 'courses/course/:id', component: CourseDetailComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', component: NotFoundComponent }

]


@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class RoutingModule {

}