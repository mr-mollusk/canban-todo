import { put, takeEvery, call, all, fork } from "redux-saga/effects";
import { api } from "../../api";
import { ITask } from "../../models";
import { ProjectActionTypes, setTasksAction } from "../reducers";

const fetchTasksFromApi = (): Promise<ITask[]> => api.get("/projects/2/todos");

function* fetchTasksWorker() {
  const { data } = yield call(fetchTasksFromApi);
  yield put(setTasksAction(data));
}

export function* tasksWatcher() {
  yield takeEvery(ProjectActionTypes.get_tasks, fetchTasksWorker);
}

export default function* projectSaga() {
  yield all([fork(tasksWatcher)]);
}
