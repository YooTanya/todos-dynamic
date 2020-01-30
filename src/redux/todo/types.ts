import { AnyAction } from "redux";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoState {
  todos: Todo[];
}

export interface TodoModuleState {
  todoModule: TodoState;
}

export enum ActionTypes {
  fetchTodos = "FETCH_TODOS",
  disposeTodos = "DISPOSE_TODOS"
}

export interface FetchTodosAction extends AnyAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

export interface DisposeTodosAction {
  type: ActionTypes.disposeTodos;
  payload: number;
}

export type TodoAction = FetchTodosAction | DisposeTodosAction;
