import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  template: `
    <div class="media media-priority-very-high">
      <div class="media-left">
        <i class="fa fa-check fa-4x" aria-hidden="true"></i>
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
        <i class="fa fa-check fa-4x" aria-hidden="true"></i>
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
        <i class="fa fa-check fa-4x" aria-hidden="true"></i>
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
        <i class="fa fa-check fa-4x" aria-hidden="true"></i>
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
        <i class="fa fa-check fa-4x" aria-hidden="true"></i>
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
      border: 1px solid red;
    }
    
    .media-priority-very-high .media-left .fa {
      background: red;
    }

    .media-priority-high {
      border: 1px solid orange;
    }
    
    .media-priority-high .media-left .fa {
      background: orange;
    }

    .media-priority-medium {
      border: 1px solid yellow;
    }
    
    .media-priority-medium .media-left .fa {
      background: yellow;
    }

    .media-priority-low {
      border: 1px solid green;
    }

    .media-priority-low .media-left .fa {
      background: green;
    }
    
    .media-priority-very-low {
      border: 1px solid blue;
    }
    
    .media-priority-very-low .media-left .fa {
      background: blue;
    }

    .media-left {
      padding-right: 0px;
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
