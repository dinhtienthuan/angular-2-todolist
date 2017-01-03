import {Component, OnInit, Input} from '@angular/core';
import {Task} from '../shared/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;

  constructor() { }

  ngOnInit() {

  }

  updatePriority(priority: string): void {
    this.task.priority = priority;
  }

  updateName(name: string): void {
    this.task.name = name;
  }

  updateStatus(status: string): void {
    this.task.status = status;
  }

}
