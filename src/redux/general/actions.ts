import { ActionTypes, GeneralAction } from "./types";

export const fetchGeneral = (): GeneralAction => {
  return {
    type: ActionTypes.fetchGeneral,
    payload: { id: 1, title: "General Title" }
  };
};
