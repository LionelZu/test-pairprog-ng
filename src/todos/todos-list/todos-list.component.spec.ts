import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { EMPTY, firstValueFrom } from 'rxjs';
import { ShareModule } from 'src/share/share.module';
import { TodosAddItemComponent } from '../todos-add-item/todos-add-item.component';
import { TodosService } from '../todos.service';

import { TodosListComponent } from './todos-list.component';

describe('TodosListComponent', () => {
  let dialogSpy: jasmine.SpyObj<MatDialog> = jasmine.createSpyObj('dialog', [
    'open',
  ]);
  let dialogRefSpy: jasmine.SpyObj<MatDialogRef<TodosAddItemComponent>> =
    jasmine.createSpyObj('dialogRef', ['afterClosed']);
  let spectator: Spectator<TodosListComponent>;

  const createComponent = createComponentFactory({
    component: TodosListComponent,
    imports: [ShareModule],
    providers: [{ provide: MatDialog, useValue: dialogSpy }],
  });

  beforeEach(() => {
    spectator = createComponent();
    spectator.detectChanges();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should show running todos', async () => {
    const todosService = spectator.inject(TodosService);
    const todos = await firstValueFrom(todosService.getTodos());
    const visibleTodos = todos.filter((t) => !t.done);

    expect(spectator.queryAll('mat-list-option')).toHaveLength(
      visibleTodos.length
    );

    visibleTodos.forEach((todo, index) => {
      expect(
        spectator.queryAll('mat-list-option app-todos-list-item')[index]
      ).toHaveAttribute('data-test-todo', todo.id);
    });
  });

  describe('when toogle viewDone', () => {
    it('should show all todos', async () => {
      const todosService = spectator.inject(TodosService);
      const todos = await firstValueFrom(todosService.getTodos());

      spectator.click('[data-test-viewDone]');

      expect(spectator.queryAll('mat-list-option')).toHaveLength(todos.length);
      todos.forEach((todo, index) => {
        expect(
          spectator.queryAll('mat-list-option app-todos-list-item')[index]
        ).toHaveAttribute('data-test-todo', todo.id);
      });
    });
  });

  describe('when click on add', () => {
    it('should open add dialog', async () => {
      dialogSpy.open.and.returnValue(dialogRefSpy);
      dialogRefSpy.afterClosed.and.returnValue(EMPTY);

      spectator.click('[data-test-add]');

      expect(dialogSpy.open).toHaveBeenCalled();
    });
  });
});
