import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary">
      <span class="title">{{ title }}</span>
    </mat-toolbar>
    <app-todos-list></app-todos-list>
  `,
  styles: [
    `
      :host {
        height: 100%;
        max-height: 100%;
        overflow: auto;
        display: flex;
        flex-direction: column;
      }
    `,
  ],
})
export class AppComponent {
  title = 'angular-todos';
}
