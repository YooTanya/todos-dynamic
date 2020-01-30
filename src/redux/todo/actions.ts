import axios from "axios";
import { Dispatch, AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { ActionTypes, FetchTodosAction, Todo, TodoModuleState } from "./types";

const url = "https://jsonplaceholder.typicode.com/todos/?_limit=10";

export const fetchTodos = (): ThunkAction<
  void,
  TodoModuleState,
  void,
  FetchTodosAction
> => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url);
    const action: FetchTodosAction = {
      type: ActionTypes.fetchTodos,
      payload: response.data
    };
    dispatch(action);
  };
};

export const disposeTodos = (): AnyAction => {
  return {
    type: ActionTypes.disposeTodos,
    payload: 1
  };
};
