import { Component, OnInit, inject } from '@angular/core';
import { TaskModel } from '../Models/Task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';
import { TaskService } from '../Services/task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  showCreateTaskForm: boolean = false;
  //submittedTask: TaskModel;
  http: HttpClient = inject(HttpClient);
  firebaseURL: string = 'https://angularhttp-c69fb-default-rtdb.firebaseio.com';
  taskList: TaskModel[] = [];
  isLoading: boolean = false;
  taskService: TaskService = inject(TaskService);
  isFormEdit: boolean = false;
  editedTask: TaskModel;
  editedTaskId: string;
  showDetails: boolean = false;
  selectedTask: TaskModel;

  ngOnInit() {
    this.getTasks();
  }

  OpenCreateTaskForm() {
    this.isFormEdit = false;
    this.editedTask = { 'assignedTo': '', 'createdOn': '', 'description': '', 'id': '', 'priority': '', 'status': '', 'title': '' }
    this.showCreateTaskForm = true;
  }

  CloseCreateTaskForm() {
    this.showCreateTaskForm = false;
  }

  submitTaskForm(value: TaskModel) {
    this.CloseCreateTaskForm();
    if (this.isFormEdit) {
      //value is the form element submitted so it would not contain id hence we have used editedTaskId
      this.taskService.updateTask(this.editedTaskId, value).subscribe(() => {
        this.getTasks();
      });
    }
    else {
      this.taskService.createTask(value).subscribe(() => {
        this.getTasks();
      });
    }
  }

  getTasks() {
    this.isLoading = true;
    this.taskService.getAllTasks().subscribe((tasksArr) => {
      this.taskList = tasksArr;
      this.isLoading = false;
    });
  }

  deleteAllTasks() {
    this.taskService.deleteAll().subscribe(() => {
      this.getTasks();
    });
  }

  deleteTask(id: string) {
    this.taskService.deleteById(id).subscribe(() => {
      this.getTasks();
    });
  }

  editTask(id: string) {
    this.editedTask = this.taskList.find(ts => ts.id === id);
    this.editedTaskId = this.editedTask.id;
    this.showCreateTaskForm = true;
    this.isFormEdit = true;
  }

  getTaskDetails(id: string) {
    this.showDetails = true;
    this.taskService.getTaskDetailsById(id).subscribe((res) => {
      this.selectedTask = res;      
    });
  }

  showTaskDetails(value: boolean) {
    this.showDetails = value;
  }
}
