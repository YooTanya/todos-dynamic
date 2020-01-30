import { IModule } from "redux-dynamic-modules";
import { generalReducer } from "./reducers";
import { GeneralModuleState, GeneralState } from "./types";
import { AnyAction, Reducer } from "redux";
import { fetchGeneral } from "./actions";

export const generalModule: IModule<GeneralModuleState> = {
  id: "general",
  reducerMap: {
    generalModule: (generalReducer as unknown) as Reducer<
      GeneralState,
      AnyAction
    >
  },
  initialActions: [fetchGeneral()]
};
