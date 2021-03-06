import { Component, OnInit } from '@angular/core';
import {Task} from "./task";
import {TaskService} from "./task.service";

@Component({
  selector: 'app-task-list',
  template: `
    <app-task *ngFor="let task of tasks" [task]="task" class="row"></app-task>
  `,
  styles: []
})
export class TaskListComponent implements OnInit {
  tasks: Task[];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getTasks()
      .subscribe(response => this.tasks = response);
  }

}
