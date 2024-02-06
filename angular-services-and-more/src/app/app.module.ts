import { NgModule } from '@angular/core';
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
import { NewTaskComponent } from './new-task/new-task.component';
import { ShowTaskComponent } from './show-task/show-task.component';
import { SubjectTaskComponent } from './subject-task/subject-task.component';
import { SubjectTypesComponent } from './subject-types/subject-types.component';

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
    NewTaskComponent,
    ShowTaskComponent,    
    SubjectTaskComponent, SubjectTypesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  
  providers: [SubscriptionService, UserService, LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
