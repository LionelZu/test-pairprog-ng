import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { map, Observable, tap, timer } from 'rxjs';
import { UidGeneratorService } from 'src/core/uid-generator.service';
import { Todo } from '../todos.model';
import { NewTodo, UpdateTodo } from './todo.action';

export interface TodoStateModel {
  list: Todo[];
  loading: boolean;
}

const defaultsTodos = [
  new Todo('1', 'Afficher la liste des todos', 'TodoList', true),
  new Todo('2', "Permettre la suppression d'une todo", 'TodoList'),
];

@State<TodoStateModel>({
  name: 'todos',
  defaults: {
    list: defaultsTodos,
    loading: false,
  },
})
@Injectable()
export class TodoState {
  @Selector()
  static getTodoList(state: TodoStateModel) {
    return state.list;
  }

  constructor(
    private uuidGenerator: UidGeneratorService,
    private store: Store
  ) {}

  private saveOnHttp(todo: Todo): Observable<Todo> {
    return timer(3000).pipe(map(() => todo));
  }

  @Action([NewTodo, UpdateTodo])
  public loading(
    ctx: StateContext<TodoStateModel>,
    action: NewTodo | UpdateTodo
  ) {
    ctx.patchState({ loading: true });
  }

  @Action([NewTodo])
  public addNewTodo(ctx: StateContext<TodoStateModel>, action: NewTodo) {
    const todo = new Todo(
      this.uuidGenerator.uuid(),
      action.todo.content,
      action.todo.category
    );

    return this.saveOnHttp(todo).pipe(
      tap((todo: Todo) => {
        const state = ctx.getState();
        const list = state.list;

        ctx.patchState({
          list: [...list, todo],
          loading: false,
        });
      })
    );
  }
}
