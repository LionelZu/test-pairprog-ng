import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Select, Store } from '@ngxs/store';
import { Observable, tap } from 'rxjs';
import { TodosAddItemComponent } from '../todos-add-item/todos-add-item.component';
import { NewTodo } from '../todos-store/todo.action';
import { TodoState } from '../todos-store/todo.state';
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
        *ngFor="let todo of stateTodos$ | async; trackBy: trackById"
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
  constructor(
    public dialog: MatDialog,
    private todosService: TodosService,
    private store: Store
  ) {}

  viewDone: boolean = false;

  @Select(TodoState.getTodoList)
  stateTodos$?: Observable<Todo[]>;

  addItem() {
    const dialogRef = this.dialog.open(TodosAddItemComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result: TodoCreator) => {
      this.saveNewTodo(result);
    });
  }

  saveNewTodo(todo: TodoCreator) {
    if (!todo) {
      return;
    }

    const action = new NewTodo(todo);
    this.store
      .dispatch(action)
      .pipe(tap(() => console.log('success')))
      .subscribe();
  }

  trackById(index: number, todo: Todo) {
    return todo.id;
  }
}
