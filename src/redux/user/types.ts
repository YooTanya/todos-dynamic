export interface User {
  userId: number;
  name: string;
}

export interface UserState {
  user: User;
}

export interface UserModuleState {
  userModule: UserState;
}

export enum ActionTypes {
  fetchUser = "FETCH_USER"
}

export interface FetchUserAction {
  type: ActionTypes.fetchUser;
  payload: User;
}

export type UserAction = FetchUserAction;
