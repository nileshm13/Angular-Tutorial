import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { StudentService } from './Services/student.service';
import { PercentPipeFormat } from './Pipes/percentFormat.pipe';
import { GenderFilterPipe } from './Pipes/genderFilter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    PercentPipeFormat,
    GenderFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
