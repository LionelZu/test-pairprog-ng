import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpTodosService } from './http-todos.service';
import { LocalTodosService } from './local-todos.service';
import { Todo, TodoCreator } from './todos.model';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(
    private local: LocalTodosService,
    private http: HttpTodosService
  ) {}

  get service() {
    return this.local;
  }

  public getTodos(viewDone: boolean = false): Observable<Todo[]> {
    return this.service.getTodos(viewDone);
  }

  public addTodo(todo: TodoCreator): void {
    return this.service.addTodo(todo);
  }

  public updateTodo(todo: Todo): void {
    return this.service.updateTodo(todo);
  }

  public getProgress(): Observable<{ total: number; done: number }> {
    return this.service.getProgress();
  }
}
