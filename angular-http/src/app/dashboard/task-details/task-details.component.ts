import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskModel } from 'src/app/Models/Task';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent {
  @Output() showTaskDetailsEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() selectedTask: TaskModel;

  closePopup() {
    this.showTaskDetailsEvent.emit(false);
  }
}
