import { put, call, all, fork, takeEvery } from "redux-saga/effects";
import { api } from "../../api";
import { ITask } from "../../models";
import { TaskActionTypes, getTaskAction } from "../reducers";

const fetchTaskById = (id: number): Promise<ITask> => api.get(`/todos/${id}`);

function* fetchTaskWorker(action: any) {
  const { data } = yield call(fetchTaskById, action.payload);
  yield put(getTaskAction(data));
}

export function* taskWatcher() {
  yield takeEvery(TaskActionTypes.get_task_by_id, fetchTaskWorker);
}

export default function* taskSaga() {
  yield all([fork(taskWatcher)]);
}
