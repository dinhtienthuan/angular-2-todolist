import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <i class="fa fa-battery-full fa-lg" aria-hidden="true"></i>
    <h1>
      {{ title }}
    </h1>
  </div>
  `
})
export class AppComponent {
  title = 'app works!';
}
