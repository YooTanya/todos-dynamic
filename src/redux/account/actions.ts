import { ActionTypes, AccountAction } from "./types";

export const fetchAccounts = (): AccountAction => {
  return {
    type: ActionTypes.fetchAccounts,
    payload: [
      {
        id: 1,
        accountNumber: "324-9-09826-1",
        accountName: "SCB Account 1"
      },
      {
        id: 2,
        accountNumber: "324-9-09826-1",
        accountName: "SCB Account 2"
      },
      {
        id: 3,
        accountNumber: "324-9-09826-1",
        accountName: "SCB Account 3"
      },
      {
        id: 4,
        accountNumber: "324-9-09826-1",
        accountName: "SCB Account 4"
      }
    ]
  };
};
