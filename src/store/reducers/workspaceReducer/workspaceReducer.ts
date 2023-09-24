import {
  WorkspaceAction,
  WorkspaceActionTypes,
  WorkspaceState,
} from "./workspaceReducer.types";

const initialState: WorkspaceState = { projectList: [] };

export const workspaceReducer = (
  state = initialState,
  action: WorkspaceAction
): WorkspaceState => {
  switch (action.type) {
    case WorkspaceActionTypes.setProjectList: {
      return { projectList: [...action.payload] };
    }
    default: {
      return state;
    }
  }
};
