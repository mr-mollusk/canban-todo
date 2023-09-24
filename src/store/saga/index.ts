import { all, fork } from "redux-saga/effects";
import projectSaga from "./projectSaga";
import taskSaga from "./taskSaga";
import workspaceSaga from "./workspaceSaga";
import commentsSaga from "./commentsSaga";

export default function* rootSaga() {
  yield all([
    fork(projectSaga),
    fork(taskSaga),
    fork(workspaceSaga),
    fork(commentsSaga),
  ]);
}
