import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { Todo } from '../todos.model';
import { NewTodo } from './todo.action';

export interface TitiStateModel {
  variabl: string;
}

const defaultsTodos = [
  new Todo('1', 'Afficher la liste des todos', 'TodoList', true),
  new Todo('2', "Permettre la suppression d'une todo", 'TodoList'),
];

@State<TitiStateModel>({
  name: 'titi',
  defaults: {
    variabl: 'ma valeur de base',
  },
})
@Injectable()
export class TitiState {
  @Action([NewTodo])
  public addNewTodo(ctx: StateContext<TitiStateModel>, action: NewTodo) {
    ctx.patchState({ variabl: 'todo modifcation' });
  }
}
