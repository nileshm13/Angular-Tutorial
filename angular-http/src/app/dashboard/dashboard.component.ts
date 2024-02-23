import { Component, OnInit, inject } from '@angular/core';
import { TaskModel } from '../Models/Task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  showCreateTaskForm: boolean = false;
  submittedTask: TaskModel;
  http: HttpClient = inject(HttpClient);
  firebaseURL: string = 'https://angularhttp-c69fb-default-rtdb.firebaseio.com/tasks.json';
  taskList: TaskModel[] = [];

  ngOnInit() {
    this.getTasks();
  }

  OpenCreateTaskForm() {
    this.showCreateTaskForm = true;
  }

  CloseCreateTaskForm() {
    this.showCreateTaskForm = false;
  }

  submitTaskForm(value: TaskModel) {
    //const taskHeaders = new HttpHeaders({ 'testheader1': 'value1' });    
    this.submittedTask = value;
    this.CloseCreateTaskForm();
    //HTTP call will be made only if there is a subsciber to it.
    this.http.post<string>(this.firebaseURL,
      this.submittedTask, { headers: { 'testheader1': 'value1', 'testheader2': 'value2' } }).subscribe((res) => {
        //generates a key value pair, key is randomly generated whereas value is entire submittedTask object
        this.getTasks();
      });
  }

  getTasks() {
    this.http.get<TaskModel[]>(this.firebaseURL).pipe(map((response) => {
      //TRANSFORM DATA
      let tasks = [];
      console.log(response);
      for (let key in response) {
        if (response.hasOwnProperty(key)) {
          tasks.push({ ...response[key], id: key });
        }
      }
      return tasks;
    })).subscribe((result) => {
      this.taskList = result;
    });
  }
}
