export interface Account {
  id: number;
  accountNumber: string;
  accountName: string;
}

export interface AccountState {
  accounts: Account[];
}

export interface AccountModuleState {
  accountModule: AccountState;
}

export enum ActionTypes {
  fetchAccounts = "FETCH_ACCOUNTS"
}

export interface FetchAccountAction {
  type: ActionTypes.fetchAccounts;
  payload: Account[];
}

export type AccountAction = FetchAccountAction;
