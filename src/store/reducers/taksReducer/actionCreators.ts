import { ITask } from "../../../models";
import { TaskActionTypes } from "./taskReducer.types";

export const getTaskAction = (data: ITask) => ({
  type: TaskActionTypes.get_task,
  payload: data,
});
export const setTaskTitleAction = (title: string) => ({
  type: TaskActionTypes.set_title,
  payload: title,
});
