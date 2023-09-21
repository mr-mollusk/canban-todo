import { IProject, ITask } from "../../../models";

export interface ProjectState extends IProject {}

export enum ProjectActionTypes {
  get_tasks = "get_tasks",
}
interface GetAllProjectTasksAction {
  type: ProjectActionTypes.get_tasks;
  payload: Array<ITask>;
}

export type ProjectAction = GetAllProjectTasksAction;
