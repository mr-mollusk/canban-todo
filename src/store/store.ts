import { applyMiddleware, combineReducers, createStore } from "redux";
import {
  taskReducer,
  projectReducer,
  workspaceReducer,
  commentsReducer,
} from "./reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";

const rootReducer = combineReducers({
  task: taskReducer,
  project: projectReducer,
  workspace: workspaceReducer,
  comment: commentsReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
