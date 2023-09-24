import { ICardsGroup, ITask } from "../../../models";
import { ProjectAction, ProjectActionTypes } from "./projectReducer.types";

export const getAllProjectTasksAction = (projectId: number): ProjectAction => ({
  type: ProjectActionTypes.get_tasks,
  payload: projectId,
});

export const setTasksAction = (data: ICardsGroup[]): ProjectAction => ({
  type: ProjectActionTypes.set_tasks,
  payload: data,
});
