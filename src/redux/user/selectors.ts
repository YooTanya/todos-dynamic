import { AccountModuleState } from "../account/types";
import { UserModuleState } from "./types";

export interface UserAndAccountModuleStates
  extends AccountModuleState,
    UserModuleState {}

export const getUserAndAccountStatesSelector = (
  state: UserAndAccountModuleStates
) => {
  return {
    userState: state.userModule,
    accountState: state.accountModule
  };
};
