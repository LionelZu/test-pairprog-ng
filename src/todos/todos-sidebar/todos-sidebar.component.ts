import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todos-sidebar',
  template: `
    <app-todos-progressions
      [progress]="progress$ | async"
    ></app-todos-progressions>
  `,
  styles: [
    `
      :host {
        display: block;
        padding: 16px;
      }
    `,
  ],
})
export class TodosSidebarComponent {
  constructor(private todosService: TodosService) {}

  progress$ = this.todosService.getProgress();
}
