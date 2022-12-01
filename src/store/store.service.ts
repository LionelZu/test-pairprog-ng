import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  distinctUntilChanged,
  filter,
  map,
  Observable,
  Subject,
  tap,
} from 'rxjs';
import { UidGeneratorService } from 'src/core/uid-generator.service';
import { Todo, TodoCreator } from 'src/todos/todos.model';

export interface State {
  todos?: Todo[];
  auth?: any;
  categories?: [];
}

export interface Action {
  type: string;
  payload: any;
}

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private state$ = new BehaviorSubject<State>({
    todos: [
      new Todo(
        this.uuidGenerator.uuid(),
        'Afficher la liste des todos',
        'TodoList',
        true
      ),
      new Todo(
        this.uuidGenerator.uuid(),
        "Permettre la suppression d'une todo",
        'TodoList'
      ),
      new Todo(
        this.uuidGenerator.uuid(),
        'Ajouter en sidebar des indicateurs par projet',
        'TodoSidebar'
      ),
    ],
  });
  public actions$ = new Subject<Action>();

  public handlers: any[] = [];

  constructor(private uuidGenerator: UidGeneratorService) {
    this.handlers.push((action: Action, state: State) => {
      switch (action.type) {
        case 'Ajout todos':
          const todoData: TodoCreator = action.payload;
          const todo = new Todo(
            this.uuidGenerator.uuid(),
            todoData.content,
            todoData.category
          );
          state.todos = [...state.todos!, todo];
          break;
      }
      return state;
    });

    this.actions$
      .pipe(
        filter((action) => action.type === 'Ajout todos'),
        // Code asynchrone
        tap(() => this.dispatch({ type: 'Add todos success', payload: {} }))
      )
      .subscribe();
  }

  select<T>(selector: (state: State) => T): Observable<T> {
    return this.state$.pipe(map(selector), distinctUntilChanged());
  }

  dispatch(action: Action): void {
    let updatedState = this.state$.value;

    this.handlers.forEach((fn) => {
      updatedState = fn(action, updatedState);
    });

    this.state$.next(updatedState);
    this.actions$.next(action);
  }
}
