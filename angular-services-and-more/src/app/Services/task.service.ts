import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    //newTaskEvent: EventEmitter<string> = new EventEmitter<string>;
    newTaskEvent = new Subject();

    OnCreateTask(task: string) {
        this.newTaskEvent.next(task);
    }
}