import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { UidGeneratorService } from 'src/core/uid-generator.service';
import { Todo, TodoCreator } from './todos.model';

@Injectable({
  providedIn: 'root',
})
export class LocalTodosService {
  private todo$ = new BehaviorSubject<Todo[]>([]);

  constructor(private uuidGenerator: UidGeneratorService) {
    this.todo$.next([
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
    ]);
  }

  public getTodos(viewDone: boolean = false): Observable<Todo[]> {
    return this.todo$
      .asObservable()
      .pipe(map((todos) => (viewDone ? todos : todos.filter((t) => !t.done))));
  }

  public addTodo(todo: TodoCreator): void {
    const todos = this.todo$.value;
    const updatedTodoss = [
      ...todos,
      new Todo(this.uuidGenerator.uuid(), todo.content, todo.category),
    ];
    this.todo$.next(updatedTodoss);
  }

  public updateTodo(todo: Todo): void {
    const todos = this.todo$.value;
    const updatedTodoss = todos.map((t) => (t.id === todo.id ? todo : t));
    this.todo$.next(updatedTodoss);
  }

  public getProgress(): Observable<{ total: number; done: number }> {
    return this.todo$.asObservable().pipe(
      map((todos) => {
        const total = todos.length;
        const done = todos.filter((t) => t.done).length;
        return { total, done };
      })
    );
  }
}
