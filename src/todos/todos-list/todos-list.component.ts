import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Todo } from '../todos.model';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todos-list',
  template: ` <div class="actions">
      <mat-slide-toggle [(ngModel)]="viewDone"
        >Voir les tâches terminées</mat-slide-toggle
      >
    </div>
    <mat-selection-list>
      <mat-list-option
        *ngFor="let todo of todo$ | async; trackBy: trackById"
        [(selected)]="todo.done"
      >
        <app-todos-list-item [todo]="todo"></app-todos-list-item>
      </mat-list-option>
    </mat-selection-list>`,
  styles: [
    `
      :host {
        display: block;
        flex: 1 1 100%;
      }

      .actions {
        display: flex;
        justify-content: flex-end;
        gap: 16px;
        margin: 16px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosListComponent {
  constructor(private todosService: TodosService) {}

  viewDone: boolean = false;

  get todo$() {
    return this.todosService.getTodos(this.viewDone);
  }

  trackById(index: number, todo: Todo) {
    return todo.id;
  }
}
