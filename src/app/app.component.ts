import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h3 class="title">{{ title }} app is running!</h3>
    <p>Hello world</p>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class AppComponent {
  title = 'angular-todos';
}
