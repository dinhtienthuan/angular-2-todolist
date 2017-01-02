import {Component, OnInit, Input} from '@angular/core';
import {Task} from "./task";

@Component({
  selector: 'app-task',
  template: `
    <div class="media">
      <div class="media-left">
        <div class="dropdown">
          <button type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" [ngClass]="task.priority">
          </button>
          <ul class="dropdown-menu">
            <li (click)="updatePriority('priority-very-high')">
              <i class="option-priority priority-very-high"></i> Very High
            </li>
            <li (click)="updatePriority('priority-high')">
              <i class="option-priority priority-high"></i> High
            </li>
            <li (click)="updatePriority('priority-medium')">
              <i class="option-priority priority-medium"></i> Medium
            </li>
            <li (click)="updatePriority('priority-low')">
              <i class="option-priority priority-low"></i> Low
            </li>
            <li (click)="updatePriority('priority-very-low')">
              <i class="option-priority priority-very-low"></i> Very Low
            </li>
          </ul>
        </div>
      </div>
      <div class="media-body">
        <h4>
          <div class="dropdown">
            <i class="fa fa-fw fa-lg" [ngClass]="task.status" aria-hidden="true" data-toggle="dropdown"></i>
            <ul class="dropdown-menu">
              <li (click)="updateStatus('fa-check')">
                <i class="fa fa-check fa-fw fa-lg" aria-hidden="true" data-toggle="dropdown"></i> Done
              </li>
              <li (click)="updateStatus('fa-question')">
                <i class="fa fa-question fa-fw fa-lg" aria-hidden="true" data-toggle="dropdown"></i> Not Done
              </li>
              <li (click)="updateStatus('fa-ban')">
                <i class="fa fa-ban fa-fw fa-lg" aria-hidden="true" data-toggle="dropdown"></i> Cancel
              </li>
            </ul>
          </div>
          {{ task.name }}
        </h4>
        <p *ngIf="task.description">{{ task.description }}</p>
      </div>
    </div>
  `,
  styles: [`
    .media {
      background-color: #eeeeee;
      overflow: visible;
    }

    .media-left {
      padding-right: 0px;
    }
    
    .media-left .dropdown button {
      padding-top: 0px;
      padding-bottom: 0px;
      width: 100%;
      height: 100%;
      border: 0px;
    }
    
    .media-body {
      padding-left: 10px;
      max-height: 4em;
      text-overflow: ellipsis;
      overflow: visible;
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
    
    .priority-very-high {
      background: #F44336;
    }
    
    .priority-high {
      background: #FF9800;
    }

    .priority-medium {
      background: #FFEB3B;
    }

    .priority-low {
      background: #8BC34A;
    }
    
    .priority-very-low {
      background: #2196F3;
    }
    
    .dropdown {
      display: inline;
    }
    
    .dropdown-menu {
      min-width: 8em;
      padding: 5px;
    }
    
    .dropdown-menu li {
      padding: 5px;
      cursor: pointer;
    }
    
    .dropdown-menu li:hover {
      background: #f5f5f5;
    }
    
    .option-priority {
      display: inline;
      padding: 5px 0 5px 5px;
      margin-right: 5px;
    }
  `]
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  status: string;

  constructor() { }

  ngOnInit() {

  }

  updatePriority(priority: string): void {
    this.task.priority = priority;
  }

  updateStatus(status: string): void {
    this.task.status = status;
  }

}
