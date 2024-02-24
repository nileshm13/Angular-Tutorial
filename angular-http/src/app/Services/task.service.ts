import { Injectable, inject } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { TaskModel } from "../Models/Task";
import { Observable, catchError, map, throwError } from "rxjs";
import { ErrorModel } from "../Models/ErrorModel";
import { LoggingService } from "./logging.service";

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    http: HttpClient = inject(HttpClient);
    firebaseURL: string = 'https://angularhttp-c69fb-default-rtdb.firebaseio.com';
    loggingService: LoggingService = inject(LoggingService);

    createTask(task: TaskModel) {
        let postURL = this.firebaseURL + '/tasks.json';
        return this.http.post<string>(postURL,
            task, { headers: { 'testheader1': 'value1', 'testheader2': 'value2' } })
            .pipe(catchError((err) => {
                let errorObj: ErrorModel = { errorCode: err.status, errorMessage: err.message, dateTime: new Date() }
                this.loggingService.addErrorLogs(errorObj).subscribe();
                return throwError(() => err);
            }))

    }

    getAllTasks() {
        let getURL = this.firebaseURL + '/tasks.json';
        let tasks = [];
        return this.http.get(getURL).pipe(map((response) => {
            for (let key in response) {
                if (response.hasOwnProperty(key)) {
                    tasks.push({ ...response[key], 'id': key });
                }
            }
            return tasks;
        }), catchError((err) => {
            let errorObj: ErrorModel = { errorCode: err.status, errorMessage: err.message, dateTime: new Date() }
            this.loggingService.addErrorLogs(errorObj).subscribe();
            return throwError(() => err);
        }));
    }

    deleteAll() {
        let deleteURL = this.firebaseURL + '/tasks.json';
        //As it returns null on successful execution, not using callback as value returned is of no use
        return this.http.delete(deleteURL)
            .pipe(catchError((err) => {
                let errorObj: ErrorModel = { errorCode: err.status, errorMessage: err.message, dateTime: new Date() }
                this.loggingService.addErrorLogs(errorObj).subscribe();
                return throwError(() => err);
            }));
    }

    deleteById(id: string) {
        let deleteURL = this.firebaseURL + '/tasks/' + id + '.json';
        return this.http.delete(deleteURL)
            .pipe(catchError((err) => {
                let errorObj: ErrorModel = { errorCode: err.status, errorMessage: err.message, dateTime: new Date() }
                this.loggingService.addErrorLogs(errorObj).subscribe();
                return throwError(() => err);
            }));
    }

    updateTask(id: string, task: TaskModel) {
        let updateURL = this.firebaseURL + '/tasks/' + id + '.json'
        return this.http.put(updateURL, task)
            .pipe(catchError((err) => {
                let errorObj: ErrorModel = { errorCode: err.status, errorMessage: err.message, dateTime: new Date() }
                this.loggingService.addErrorLogs(errorObj).subscribe();
                return throwError(() => err);
            }));
    }

    getTaskDetailsById(id: string) {
        return this.http.get<TaskModel>(this.firebaseURL + '/tasks/' + id + '.json').pipe(
            catchError((err) => {
                let errorObj: ErrorModel = { errorCode: err.status, errorMessage: err.message, dateTime: new Date() }
                this.loggingService.addErrorLogs(errorObj).subscribe();
                return throwError(() => err);
            }));
    }
}