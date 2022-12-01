import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { UidGeneratorService } from 'src/core/uid-generator.service';
import { Todo, TodoCreator } from './todos.model';

@Injectable({
  providedIn: 'root',
})
export class HttpTodosService {
  private static url = '/api';

  private static httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  /*
  curl --request POST \
  'https://data.mongodb-api.com/app/data-abcde/endpoint/data/v1/action/insertOne' \
  --header 'Content-Type: application/json' \
  --header 'api-key: TpqAKQgvhZE4r6AOzpVydJ9a3tB1BLMrgDzLlBLbihKNDzSJWTAHMVbsMoIOpnM6' \
  --data-raw '{
      "dataSource": "Cluster0",
      "database": "learn-data-api",
      "collection": "hello",
      "document": {
        "text": "Hello from the Data API!",
      }
  }'
*/

  constructor(
    private uuidGenerator: UidGeneratorService,
    private http: HttpClient
  ) {}

  public getTodos(viewDone: boolean = false): Observable<Todo[]> {
    return EMPTY;
  }

  public addTodo(todo: TodoCreator): void {
    this.http
      .post(
        `${HttpTodosService.url}/todos`,
        new Todo(this.uuidGenerator.uuid(), todo.content, todo.category),
        HttpTodosService.httpOptions
      )
      .subscribe();
  }

  public updateTodo(todo: Todo): void {}

  public getProgress(): Observable<{ total: number; done: number }> {
    return EMPTY;
  }
}
