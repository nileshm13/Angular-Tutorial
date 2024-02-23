import { Component, OnInit, inject } from '@angular/core';
import { TaskModel } from '../Models/Task';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  showCreateTaskForm: boolean = false;
  task: TaskModel;
  http: HttpClient = inject(HttpClient);

  OpenCreateTaskForm() {
    this.showCreateTaskForm = true;
  }

  CloseCreateTaskForm() {
    this.showCreateTaskForm = false;
  }

  submitTaskForm(value: TaskModel) {
    this.task = value;
    //this.CloseCreateTaskForm();
    //HTTP call will be made only if there is a subsciber to it.
    this.http.post('https://angularhttp-c69fb-default-rtdb.firebaseio.com/tasks.json', this.task).subscribe((res) => {
      console.log(res);
      //generates a key value pair, key is randomly generated whereas value is entire task object
    });
  }
}
