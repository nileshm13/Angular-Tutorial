import { AfterViewChecked, AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskModel } from 'src/app/Models/Task';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements AfterViewInit {
  @Output() CloseForm: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() submitFormEvent: EventEmitter<TaskModel> = new EventEmitter<TaskModel>();
  @ViewChild('taskForm') taskForm: NgForm;
  @Input() isModeEdit: boolean = false;
  @Input() editedTask: TaskModel;

  OnCloseForm() {
    this.CloseForm.emit(false);
  }

  submitTask() {
    this.submitFormEvent.emit(this.taskForm.value);
  }

  ngAfterViewInit() {   
    setTimeout(() => {
      this.taskForm.form.patchValue(this.editedTask);
    }, 0);

  }
}
