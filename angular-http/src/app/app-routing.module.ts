import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { canActivateRoute } from './RouteGuards/AuthGuard';

const routes: Routes = [ 
    { path: '', component: HomeComponent }, 
    { path: 'login', component: LoginComponent }, 
    { path: 'dashboard', component: DashboardComponent, canActivate: [canActivateRoute] },  
  ]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule], 
  providers: []
})
export class RouteModule { }
