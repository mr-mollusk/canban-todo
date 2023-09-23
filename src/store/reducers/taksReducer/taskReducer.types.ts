import { ITask } from "../../../models";

export interface TaskState extends ITask {}

export enum TaskActionTypes {
  get_task = "get_task",
  get_task_by_id = "get_task_by_id",
  set_title = "set_title",
}
interface GetTaskAction {
  type: TaskActionTypes.get_task;
  payload: ITask;
}

interface GetTaskByIdAction {
  type: TaskActionTypes.get_task_by_id;
  payload: number;
}

interface SetTitleAction {
  type: TaskActionTypes.set_title;
  payload: string;
}

export type TaskAction = GetTaskAction | SetTitleAction | GetTaskByIdAction;
