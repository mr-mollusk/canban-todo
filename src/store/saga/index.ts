import { all, fork } from "redux-saga/effects";
import projectSaga from "./progectSaga";

export default function* rootSaga() {
  yield all([fork(projectSaga)]);
}
