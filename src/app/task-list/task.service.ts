import { Injectable } from '@angular/core';
import { Task } from "./task";
import { Observable } from "rxjs";

@Injectable()
export class TaskService {
  tasks: Task[] = [
    new Task(0, 'Test Task 1', 'Do not implement test task.', 'priority-very-high', 'fa-question'),
    new Task(0, 'Test Task 2', 'Do not implement test task.', 'priority-low', 'fa-check'),
    new Task(0, 'Test Task 3', 'Do not implement test task.', 'priority-high', 'fa-ban'),
    new Task(0, 'Test Task 4', 'Do not implement test task.', 'priority-very-low', 'fa-question'),
    new Task(0, 'Test Task 5', 'Do not implement test task.', 'priority-medium', 'fa-check')
  ];

  constructor() { }

  getTasks(): Observable<Task[]> {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(this.tasks);
      }, 2000);
    });
  }
}
