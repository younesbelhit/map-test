import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import appReducers from "./reducers";
import { composeWithDevTools } from "@redux-devtools/extension";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  appReducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagas.forEach((saga) => sagaMiddleware.run(saga));

export default store;
