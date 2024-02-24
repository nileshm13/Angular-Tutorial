import { Injectable, inject } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
        let getURL = this.firebaseURL + '/tasks.json'
        let tasks = [];
        return this.http.get(getURL).pipe(map((response) => {
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
}