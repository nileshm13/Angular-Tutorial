import { Component, OnInit, inject } from '@angular/core';
import { TaskModel } from '../Models/Task';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';
import { TaskService } from '../Services/task.service';
import { LoggingService } from '../Services/logging.service';
import { ErrorModel } from '../Models/ErrorModel';

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
  errorDetails: HttpErrorResponse;
  errorMessage: string;
  loggingService: LoggingService = inject(LoggingService)

  ngOnInit() {
    this.getTasks();
  }

  OpenCreateUpdateTaskForm() {
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
      this.taskService.updateTask(this.editedTaskId, value).subscribe({
        next: () => {
          this.getTasks();
        },
        error: (err) => {
          this.setErrorMessage(err);
        }
      });
    }
    else {
      this.taskService.createTask(value).subscribe({
        next: () => {
          this.getTasks();
        },
        error: (err) => {
          this.setErrorMessage(err);
        }
      });
    }
  }

  getTasks() {
    this.isLoading = true;
    this.taskService.getAllTasks().subscribe({
      next: (tasksArr) => {
        this.taskList = tasksArr;
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        this.setErrorMessage(err);
      }
    });
  }

  deleteAllTasks() {
    this.taskService.deleteAll().subscribe({
      next: () => {
        this.getTasks();
      },
      error: (err) => {
        this.setErrorMessage(err);
      }
    });
  }

  deleteTask(id: string) {
    this.taskService.deleteById(id).subscribe({
      next: () => {
        this.getTasks();
      },
      error: (err) => {
        this.setErrorMessage(err);
      }
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
    this.taskService.getTaskDetailsById(id).subscribe({
      next: (res) => {
        this.selectedTask = res;
      },
      error: (err) => {
        this.setErrorMessage(err);
      }
    });
  }

  showTaskDetails(value: boolean) {
    this.showDetails = value;
  }

  private setErrorMessage(responseError: HttpErrorResponse) {
    if (responseError.error.error == 'Permission denied') {
      this.errorMessage = 'User is not authorized to access this page';
    }
    else {
      this.errorMessage = responseError.message;
    }
    setTimeout(() => {
      this.errorMessage = null;
    }, 3000);    
  }

  getErrorLogs() {
    this.loggingService.fetchErrorLog().subscribe({
      next: (res) => {
        console.log(res);
      }
    });
  }
}