import {
  ProjectAction,
  ProjectActionTypes,
  ProjectState,
} from "./projectReducer.types";

const initialState: ProjectState = {
  id: 0,
  title: "",
  tasks: [],
};

export const projectReducer = (
  state = initialState,
  action: ProjectAction
): ProjectState => {
  switch (action.type) {
    case ProjectActionTypes.set_tasks: {
      
      return { ...state, tasks: [...action.payload] };
    }
    default: {
      return state;
    }
  }
};
