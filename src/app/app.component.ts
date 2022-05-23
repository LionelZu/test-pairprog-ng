import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary">
      <span class="title">{{ title }}</span>
    </mat-toolbar>
    <mat-drawer-container>
      <mat-drawer-content>
        <app-todos-list></app-todos-list>
      </mat-drawer-content>
      <mat-drawer mode="side" position="end" opened>
        <app-todos-sidebar></app-todos-sidebar>
      </mat-drawer>
    </mat-drawer-container>
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

      mat-drawer-container {
        flex: 1 1 100%;
      }

      mat-drawer {
        width: 20%;
        min-width: 300px;
      }
    `,
  ],
})
export class AppComponent {
  title = 'angular-todos';
}
