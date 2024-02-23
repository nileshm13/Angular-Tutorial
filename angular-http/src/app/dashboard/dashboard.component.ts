import { Component, OnInit, inject } from '@angular/core';
import { TaskModel } from '../Models/Task';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  showCreateTaskForm: boolean = false;
  task: TaskModel;
  http: HttpClient = inject(HttpClient);

  ngOnInit() {
    
  }

  OpenCreateTaskForm() {
    this.showCreateTaskForm = true;
  }

  CloseCreateTaskForm() {
    this.showCreateTaskForm = false;
  }

  submitTaskForm(value: TaskModel) {
    //const taskHeaders = new HttpHeaders({ 'testheader1': 'value1' });    
    this.task = value;
    this.CloseCreateTaskForm();
    //HTTP call will be made only if there is a subsciber to it.
    this.http.post<string>('https://angularhttp-c69fb-default-rtdb.firebaseio.com/tasks.json',
      this.task, { headers: { 'testheader1': 'value1', 'testheader2': 'value2' } }).subscribe((res) => {
        console.log(res);
        //generates a key value pair, key is randomly generated whereas value is entire task object
      });
  }
}
