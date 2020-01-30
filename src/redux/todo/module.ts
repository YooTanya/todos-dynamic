import { AnyAction, Reducer } from "redux";
import { IModule } from "redux-dynamic-modules";
import { disposeTodos, fetchTodos } from "./actions";
import { todoReducer } from "./reducers";
import { TodoModuleState, TodoState } from "./types";

export const todoModule: IModule<TodoModuleState> = {
  id: "todos",
  reducerMap: {
    todoModule: (todoReducer as unknown) as Reducer<TodoState, AnyAction>
  },
  initialActions: [(fetchTodos() as unknown) as AnyAction],
  finalActions: [disposeTodos()]
};
