import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomInterceptor } from './Services/custom-interceptor.service';
import { LoggingInterceptor } from './Services/logging-interceptor.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RouteModule } from './app-routing.module';
import { LoaderComponent } from './utility/loader/loader.component';
import { ErrorSnackbarComponent } from './utility/error-snackbar/error-snackbar.component';
import { DashBoardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,    
    HomeComponent,
    LoginComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouteModule,
    DashBoardModule
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
