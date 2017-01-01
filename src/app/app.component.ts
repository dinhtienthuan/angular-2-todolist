import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <div class="page-header">
        <h1>ToDoList</h1>
      </div>
      <app-task></app-task>
    </div>
  `
})
export class AppComponent {
  title = 'app works!';
}
