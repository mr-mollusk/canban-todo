import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { WorkspaceActionTypes } from "../reducers/workspaceReducer/workspaceReducer.types";
import { getProjectsList } from "../../api";
import { setProjectsAction } from "../reducers";

function* fetchWorkspaceWorker() {
  const { data } = yield call(getProjectsList);
  yield put(setProjectsAction(data));
}

export function* workspaceWatcher() {
  yield takeEvery(WorkspaceActionTypes.getProjectList, fetchWorkspaceWorker);
}

export default function* workspaceSaga() {
  yield all([fork(workspaceWatcher)]);
}
