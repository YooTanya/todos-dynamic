import { IModule } from "redux-dynamic-modules";
import { fetchAccounts } from "./actions";
import { accountReducer } from "./reducers";
import { AccountModuleState, AccountState } from "./types";
import { AnyAction, Reducer } from "redux";

export const accountModule: IModule<AccountModuleState> = {
  id: "account",
  reducerMap: {
    accountModule: (accountReducer as unknown) as Reducer<
      AccountState,
      AnyAction
    >
  },
  initialActions: [fetchAccounts()]
};
