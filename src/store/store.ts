import { applyMiddleware, combineReducers, createStore } from "redux";
import { taskReducer, projectReducer } from "./reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";

const rootReducer = combineReducers({
  task: taskReducer,
  project: projectReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
