export interface General {
  id: number;
  title: string;
}

export interface GeneralState {
  general?: General;
}

export interface GeneralModuleState {
  generalModule: GeneralState;
}

export enum ActionTypes {
  fetchGeneral = "FETCH_GENERAL"
}

export interface FetchGeneralAction {
  type: ActionTypes.fetchGeneral;
  payload: General;
}

export type GeneralAction = FetchGeneralAction;
