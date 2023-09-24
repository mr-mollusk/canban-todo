import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { CommentsActionTypes, setCommentsAction } from "../reducers";
import { getComments } from "../../api";

function* fetchCommentsWorker(action: any) {
  const { data } = yield call(getComments, action.payload);
  yield put(setCommentsAction(data));
}

export function* commentsWatcher() {
  yield takeEvery(CommentsActionTypes.getComments, fetchCommentsWorker);
}

export default function* commentsSaga() {
  yield all([fork(commentsWatcher)]);
}
