import { all, fork } from "redux-saga/effects";
import projectSaga from "./projectSaga";

export default function* rootSaga() {
  yield all([fork(projectSaga)]);
}
