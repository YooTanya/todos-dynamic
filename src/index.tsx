import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createStore, IModuleStore } from "redux-dynamic-modules";
import { getThunkExtension } from "redux-dynamic-modules-thunk";

import * as serviceWorker from "./serviceWorker";
import App from "./components/App";
import { generalModule } from "./redux/general/module";
import { GeneralModuleState } from "./redux/general/types";

export interface RootState extends GeneralModuleState {}

export const store: IModuleStore<RootState> = createStore(
  {
    extensions: [getThunkExtension()]
  },
  generalModule
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
