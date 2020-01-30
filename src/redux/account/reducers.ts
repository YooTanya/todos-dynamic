import { AccountAction, ActionTypes, AccountState } from "../account/types";

const initialState: AccountState = {
  accounts: []
};
export const accountReducer = (
  state = initialState,
  action: AccountAction
): AccountState => {
  if (action.type === ActionTypes.fetchAccounts) {
    return { accounts: action.payload };
  } else {
    return state;
  }
};
