import { Injectable, inject } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { TaskModel } from "../Models/Task";
import { Observable, map } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    http: HttpClient = inject(HttpClient);
    firebaseURL: string = 'https://angularhttp-c69fb-default-rtdb.firebaseio.com';

    createTask(task: TaskModel) {
        let postURL = this.firebaseURL + '/tasks.json';
        return this.http.post<string>(postURL,
            task, { headers: { 'testheader1': 'value1', 'testheader2': 'value2' } });
    }

    getAllTasks() {
        let getURL = this.firebaseURL + '/tasks.json';
        let reqHeaders = new HttpHeaders(); //This is immutable is nature, hence we have to reassign in below line
        reqHeaders = reqHeaders.set('test-header1', 'header-value1');
        reqHeaders = reqHeaders.set('test-header2', 'header-value2');
        // reqHeaders = reqHeaders.append('test-header1','header-value3');
        // reqHeaders = reqHeaders.append('test-header2','header-value4');

        let queryParams = new HttpParams();
        queryParams = queryParams.set('page', '2');
        queryParams = queryParams.set('items', '10');
        queryParams = queryParams.append('page', '3');
        queryParams = queryParams.append('items', '15');
        let tasks = [];
        return this.http.get(getURL, { headers: reqHeaders, params: queryParams }).pipe(map((response) => {
            for (let key in response) {
                if (response.hasOwnProperty(key)) {
                    tasks.push({ ...response[key], 'id': key });
                }
            }
            return tasks;
        }));
    }

    deleteAll() {
        let deleteURL = this.firebaseURL + '/tasks.json';
        //As it returns null on successful execution, not using callback as value returned is of no use
        return this.http.delete(deleteURL);
    }

    deleteById(id: string) {
        let deleteURL = this.firebaseURL + '/tasks/' + id + '.json';
        return this.http.delete(deleteURL);
    }

    updateTask(id: string, task: TaskModel) {
        let updateURL = this.firebaseURL + '/tasks/' + id + '.json'
        return this.http.put(updateURL, task);
    }

    getTaskDetailsById(id: string) {
        return this.http.get<TaskModel>(this.firebaseURL + '/tasks/' + id + '.json');
    }
}