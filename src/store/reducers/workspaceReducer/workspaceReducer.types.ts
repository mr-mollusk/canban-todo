import { IProject, IWorkspace } from "../../../models";

export interface WorkspaceState extends IWorkspace {}

export enum WorkspaceActionTypes {
  getProjectList = "get_project_list",
  setProjectList = "set_project_list",
}
interface GetAllProjectsAction {
  type: WorkspaceActionTypes.getProjectList;
}
interface SetProjectsAction {
  type: WorkspaceActionTypes.setProjectList;
  payload: Array<IProject>;
}

export type WorkspaceAction = GetAllProjectsAction | SetProjectsAction;
