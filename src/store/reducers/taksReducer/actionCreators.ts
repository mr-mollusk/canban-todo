import { ITask } from "../../../models";
import { TaskAction, TaskActionTypes } from "./taskReducer.types";

export const getTaskAction = (data: ITask) => ({
  type: TaskActionTypes.get_task,
  payload: data,
});
export const setTaskTitleAction = (title: string) => ({
  type: TaskActionTypes.set_title,
  payload: title,
});
export const getTaskByIdAction = (id: number): TaskAction => ({
  type: TaskActionTypes.get_task_by_id,
  payload: id,
});
