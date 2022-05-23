import { ComponentFixture, TestBed } from '@angular/core/testing';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { ShareModule } from 'src/share/share.module';
import { Todo } from '../todos.model';

import { TodosListItemComponent } from './todos-list-item.component';

describe('TodosListItemComponent', () => {
  let spectator: Spectator<TodosListItemComponent>;
  const todo = new Todo('id1', 'content', 'category');

  const createComponent = createComponentFactory({
    component: TodosListItemComponent,
    imports: [ShareModule],
  });

  beforeEach(() => {
    spectator = createComponent();
    spectator.setInput('todo', todo);
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should show content and category', () => {
    expect(spectator.query('[data-test-content]')).toHaveText(todo.content);
    expect(spectator.query('mat-chip')).toHaveText(todo.category);
  });
});
