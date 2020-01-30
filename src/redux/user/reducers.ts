import { ActionTypes, UserAction, UserState } from "./types";

const initialState: UserState = {
  user: { userId: 1, name: "Tanya Rimphanitchayakit" }
};

export const userReducer = (
  state = initialState,
  action: UserAction
): UserState => {
  if (action.type === ActionTypes.fetchUser) {
    return { user: action.payload };
  } else {
    return state;
  }
};
