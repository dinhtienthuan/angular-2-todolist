import {Component, OnInit, Input} from '@angular/core';
import {Task} from "./task";

@Component({
  selector: 'app-task',
  template: `
    <div class="media" [ngClass]="task.priority">
      <div class="media-left">&nbsp;</div>
      <div class="media-body">
        <h4>
          <div class="dropdown">
            <i class="fa fa-fw fa-lg" [ngClass]="task.status" aria-hidden="true" data-toggle="dropdown"></i>
            <ul class="dropdown-menu">
              <li (click)="updateStatus('fa-check')" value="fa-check">
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
    
    div.dropdown {
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
  `]
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  status: string;

  constructor() { }

  ngOnInit() {

  }

  updateStatus(status: string): void {
    this.task.status = status;
  }

}
