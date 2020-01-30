import { ActionTypes, TodoAction, TodoState } from "./types";

const initialState: TodoState = {
  todos: []
};

export const todoReducer = (
  state = initialState,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return { todos: action.payload };
    case ActionTypes.disposeTodos:
      return { todos: state.todos.filter(todo => todo.id === action.payload) };
    default:
      return state;
  }
};
