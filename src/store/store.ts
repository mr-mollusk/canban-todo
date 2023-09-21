import { combineReducers, createStore } from "redux";
import { taskReducer, projectReducer } from "./reducers";

const rootReducer = combineReducers({
  task: taskReducer,
  project: projectReducer,
});

export const store = createStore(rootReducer);
