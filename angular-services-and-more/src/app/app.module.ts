import { NgModule, InjectionToken } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './header/home/home.component';
import { AdminComponent } from './header/admin/admin.component';
import { HeroComponent } from './header/home/hero/hero.component';
import { SidebarComponent } from './header/home/sidebar/sidebar.component';
import { UserListComponent } from './header/admin/user-list/user-list.component';
import { FormsModule } from '@angular/forms';
import { UserDetailComponent } from './header/admin/user-detail/user-detail.component';
import { SubscriptionService } from './Services/Subsciption.service';
import { UserService } from './Services/user.service';
import { LoggerService } from './Services/logger.service';
import { ObservablesComponent } from './observables/observables.component';

export const USER_TOKEN = new InjectionToken<UserService>('USER_SERVICE_TOKEN');
// USER_TOKEN is unique identifier which will be assigned to provide in providers Array
// USER_SERVICE_TOKEN is just a string to identify what this token is created for, can be any string

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AdminComponent,
    HeroComponent,
    SidebarComponent,
    UserListComponent,
    UserDetailComponent,
    ObservablesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  // Each element in providers array is actually treated by angular as {provide: UserService, useClass: UserService}
  // provide is used to uniquely identify a provider in providers array, it accepts values such as Type,string,instance of injection token. Its also called as token.
  // useClass is to identify which class needs to be instantiated.
  providers: [SubscriptionService, {provide: USER_TOKEN, useClass: UserService}, LoggerService],
  // providers: [SubscriptionService, UserService, LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
