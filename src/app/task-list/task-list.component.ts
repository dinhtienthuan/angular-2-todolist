import { Component, OnInit } from '@angular/core';
import {Task} from "./task";

@Component({
  selector: 'app-task-list',
  template: `
    <app-task *ngFor="let task of tasks" [task]="task" class="row"></app-task>
  `,
  styles: []
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [
    new Task(0, 'Test Task 1', 'Do not implement test task.', 'media-priority-very-high', 'fa-question'),
    new Task(0, 'Test Task 2', 'Do not implement test task.', 'media-priority-low', 'fa-check'),
    new Task(0, 'Test Task 3', 'Do not implement test task.', 'media-priority-high', 'fa-ban'),
    new Task(0, 'Test Task 4', 'Do not implement test task.', 'media-priority-very-low', 'fa-question'),
    new Task(0, 'Test Task 5', 'Do not implement test task.', 'media-priority-medium', 'fa-check')
  ];

  constructor() { }

  ngOnInit() {
  }

}
