import { all, fork } from "redux-saga/effects";
import projectSaga from "./projectSaga";
import taskSaga from "./taskSaga";

export default function* rootSaga() {
  yield all([fork(projectSaga), fork(taskSaga)]);
}
