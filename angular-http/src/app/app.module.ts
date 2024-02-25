import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateTaskComponent } from './dashboard/create-task/create-task.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TaskDetailsComponent } from './dashboard/task-details/task-details.component';
import { CustomInterceptor } from './Services/custom-interceptor.service';
import { LoggingInterceptor } from './Services/logging-interceptor.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RouteModule } from './app-routing.module';
import { LoaderComponent } from './utility/loader/loader.component';
import { ErrorSnackbarComponent } from './utility/error-snackbar/error-snackbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    CreateTaskComponent,
    TaskDetailsComponent,
    HomeComponent,
    LoginComponent,
    LoaderComponent,
    ErrorSnackbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouteModule
  ],
  //multi: true here ensures all the interceptors listed in providers array get executed one after another in order they are specified
  // instead of overwriting one/another, Mixing multi true and false is not allowed.
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true}
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
