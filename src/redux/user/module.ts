import { AnyAction, Reducer } from "redux";
import { IModule } from "redux-dynamic-modules";
import { accountModule } from "../account/module";
import { userReducer } from "./reducers";
import { UserModuleState, UserState } from "./types";

const _userModule: IModule<UserModuleState> = {
  id: "user",
  reducerMap: {
    userModule: (userReducer as unknown) as Reducer<UserState, AnyAction>
  }
};

export const userModule = [_userModule, accountModule];
