import { Component, OnInit } from '@angular/core';
import {Task} from "./task";

@Component({
  selector: 'app-task',
  template: `
    <div class="media" [ngClass]="task.priority">
      <div class="media-left">&nbsp;</div>
      <div class="media-body">
        <h4><i class="fa fa-fw" [ngClass]="task.status" aria-hidden="true"></i> {{ task.name }}</h4>
        <p *ngIf="task.description">{{ task.description }}</p>
      </div>
    </div>
  `,
  styles: [`
    .media {
      background-color: #eeeeee;
    }

    .media-left {
      padding-right: 0px;
    }
    
    .media-body {
      padding-left: 10px;
      max-height: 4em;
      text-overflow: ellipsis;
    }
    
    .media-body .fa-question {
      color: #0091EA;
    }
    
    .media-body .fa-check {
      color: #64DD17;
    }
    
    .media-body .fa-ban {
      color: #D50000;
    }
    
    .media-priority-very-high .media-left {
      background: #F44336;
    }
    
    .media-priority-high .media-left {
      background: #FF9800;
    }

    .media-priority-medium .media-left {
      background: #FFEB3B;
    }

    .media-priority-low .media-left {
      background: #8BC34A;
    }
    
    .media-priority-very-low .media-left {
      background: #2196F3;
    }
  `]
})
export class TaskComponent implements OnInit {
  task:Task = {
    id: 0,
    name: 'Test Task',
    description: 'This is a test task. Do not implement it. It will be deleted after testing.',
    priority: 'media-priority-very-high',
    status: 'fa-check',
  }
  constructor() { }

  ngOnInit() {
  }

}
