import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';
import { TodosAddItemComponent } from '../todos-add-item/todos-add-item.component';
import { Todo, TodoCreator } from '../todos.model';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todos-list',
  template: ` <div class="actions">
      <mat-slide-toggle [(ngModel)]="viewDone">
        Voir les tâches terminées
      </mat-slide-toggle>
      <button
        mat-mini-fab
        color="primary"
        aria-label="Ajout d'une todo"
        (click)="addItem()"
      >
        <mat-icon>add</mat-icon>
      </button>
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
        align-items: center;
        gap: 16px;
        margin: 16px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosListComponent {
  constructor(public dialog: MatDialog, private todosService: TodosService) {}

  viewDone: boolean = false;

  get todo$() {
    return this.todosService.getTodos(this.viewDone);
  }

  addItem() {
    const dialogRef = this.dialog.open(TodosAddItemComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('create popup is close');
    });
  }

  trackById(index: number, todo: Todo) {
    return todo.id;
  }
}
