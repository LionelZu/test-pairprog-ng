import { TodoCreator } from '../todos.model';

export class NewTodo {
  static readonly type = '[Todo] Add new todo';

  constructor(public todo: TodoCreator) {}
}

export class UpdateTodo {
  static readonly type = '[Todo] Update todo';

  constructor(public todo: TodoCreator) {}
}
