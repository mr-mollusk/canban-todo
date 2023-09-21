import { ITask } from "../../../models";
import { ProjectActionTypes } from "./projectReducer.types";

export const getAllProjectTasksAction = (data: ITask[]) => ({
  type: ProjectActionTypes.get_tasks,
  payload: data,
});
