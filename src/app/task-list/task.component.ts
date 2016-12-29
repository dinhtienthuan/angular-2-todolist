import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  template: `
    <div class="media media-priority-very-high">
      <div class="media-left">
        <i class="fa fa-check fa-fw fa-4x" aria-hidden="true"></i>
      </div>
      <div class="media-body">
        <h4>Test Task</h4>
        <p>
          This is a test task. Do not implement. This is a test task. Do not implement.
          This is a test task. Do not implement. This is a test task. Do not implement.
          This is a test task. Do not implement. This is a test task. Do not implement.
          This is a test task. Do not implement. This is a test task. Do not implement.
          This is a test task. Do not implement. This is a test task. Do not implement.
          This is a test task. Do not implement. This is a test task. Do not implement.
          This is a test task. Do not implement. This is a test task. Do not implement.
          This is a test task. Do not implement. </p>
      </div>
    </div>
    <div class="media media-priority-high">
      <div class="media-left">
        <i class="fa fa-ban fa-fw fa-4x" aria-hidden="true"></i>
      </div>
      <div class="media-body">
        <h4>Test Task</h4>
        <p>
          This is a test task. Do not implement. This is a test task. Do not implement.
          This is a test task. Do not implement. This is a test task. Do not implement.
          This is a test task. Do not implement. This is a test task. Do not implement.
          This is a test task. Do not implement. This is a test task. Do not implement.
          This is a test task. Do not implement. This is a test task. Do not implement.
          This is a test task. Do not implement. This is a test task. Do not implement.
          This is a test task. Do not implement. This is a test task. Do not implement.
          This is a test task. Do not implement. </p>
      </div>
    </div>
    <div class="media media-priority-medium">
      <div class="media-left">
        <i class="fa fa-fw fa-4x" aria-hidden="true"></i>
      </div>
      <div class="media-body">
        <h4>Test Task</h4>
        <p>
          This is a test task. Do not implement. This is a test task. Do not implement.
          This is a test task. Do not implement. This is a test task. Do not implement.
          This is a test task. Do not implement. This is a test task. Do not implement.
          This is a test task. Do not implement. This is a test task. Do not implement.
          This is a test task. Do not implement. This is a test task. Do not implement.
          This is a test task. Do not implement. This is a test task. Do not implement.
          This is a test task. Do not implement. This is a test task. Do not implement.
          This is a test task. Do not implement. </p>
      </div>
    </div>
    <div class="media media-priority-low">
      <div class="media-left">
        <i class="fa fa-check fa-fw fa-4x" aria-hidden="true"></i>
      </div>
      <div class="media-body">
        <h4>Test Task</h4>
        <p>
          This is a test task. Do not implement. This is a test task. Do not implement.
          This is a test task. Do not implement. This is a test task. Do not implement.
          This is a test task. Do not implement. This is a test task. Do not implement.
          This is a test task. Do not implement. This is a test task. Do not implement.
          This is a test task. Do not implement. This is a test task. Do not implement.
          This is a test task. Do not implement. This is a test task. Do not implement.
          This is a test task. Do not implement. This is a test task. Do not implement.
          This is a test task. Do not implement. </p>
      </div>
    </div>
    <div class="media media-priority-very-low">
      <div class="media-left">
        <i class="fa fa-check fa-fw fa-4x" aria-hidden="true"></i>
      </div>
      <div class="media-body">
        <h4>Test Task</h4>
        <p>
          This is a test task. Do not implement. This is a test task. Do not implement.
          This is a test task. Do not implement. This is a test task. Do not implement.
          This is a test task. Do not implement. This is a test task. Do not implement.
          This is a test task. Do not implement. This is a test task. Do not implement.
          This is a test task. Do not implement. This is a test task. Do not implement.
          This is a test task. Do not implement. This is a test task. Do not implement.
          This is a test task. Do not implement. This is a test task. Do not implement.
          This is a test task. Do not implement. </p>
      </div>
    </div>`,
  styles: [`
    .media {
      background-color: #eeeeee;
    }

    .media-priority-very-high {
      border: 1px solid #F44336;
    }
    
    .media-priority-very-high .media-left .fa {
      background: #F44336;
    }

    .media-priority-high {
      border: 1px solid #FF9800;
    }
    
    .media-priority-high .media-left .fa {
      background: #FF9800;
    }

    .media-priority-medium {
      border: 1px solid #FFEB3B;
    }
    
    .media-priority-medium .media-left .fa {
      background: #FFEB3B;
    }

    .media-priority-low {
      border: 1px solid #4CAF50;
    }

    .media-priority-low .media-left .fa {
      background: #4CAF50;
    }
    
    .media-priority-very-low {
      border: 1px solid #2196F3;
    }
    
    .media-priority-very-low .media-left .fa {
      background: #2196F3;
    }

    .media-left {
      padding-right: 0px;
    }
    
    .media-left .fa {
      height: 1em;
    }

    .media-left .fa-fw {
      width: 1em;
    }

    .media-body {
      padding-left: 10px;
    }
  `]
})
export class TaskComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
