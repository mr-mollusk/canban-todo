import { ITask } from "../../../models";

export interface TaskState extends ITask {}

export enum TaskActionTypes {
  get_task = "get_task",
  set_title = "set_title",
}
interface GetTaskAction {
  type: TaskActionTypes.get_task;
  payload: ITask;
}

interface SetTitleAction {
  type: TaskActionTypes.set_title;
  payload: string;
}

export type TaskAction = GetTaskAction | SetTitleAction;
