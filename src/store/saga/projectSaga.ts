import { put, takeEvery, call, all, fork } from "redux-saga/effects";
import { api } from "../../api";
import { ICardsGroup, ITask } from "../../models";
import { ProjectActionTypes, setTasksAction } from "../reducers";

const fetchTasksFromApi = (id: number): Promise<ICardsGroup[]> =>
  api.get(`/projects/${id}/todos-by-group`);

function* fetchTasksWorker(action: any) {
  const { data } = yield call(fetchTasksFromApi, action.payload);
  yield put(setTasksAction(data));
}

export function* tasksWatcher() {
  yield takeEvery(ProjectActionTypes.get_tasks, fetchTasksWorker);
}

export default function* projectSaga() {
  yield all([fork(tasksWatcher)]);
}
