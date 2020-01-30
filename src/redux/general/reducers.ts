import { GeneralState, GeneralAction, ActionTypes } from "./types";

const initialState: GeneralState = {};

export const generalReducer = (
  state = initialState,
  action: GeneralAction
): GeneralState => {
  if (ActionTypes.fetchGeneral === action.type) {
    return { general: action.payload };
  } else {
    return state;
  }
};
