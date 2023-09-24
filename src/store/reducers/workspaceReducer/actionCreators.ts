import {
  WorkspaceAction,
  WorkspaceActionTypes,
} from "./workspaceReducer.types";
import { IProject } from "../../../models";

export const getProjectsListAction = (): WorkspaceAction => ({
  type: WorkspaceActionTypes.getProjectList,
});
export const setProjectsAction = (data: Array<IProject>): WorkspaceAction => ({
  type: WorkspaceActionTypes.setProjectList,
  payload: data,
});
