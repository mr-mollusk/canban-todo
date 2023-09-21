import { TaskAction, TaskActionTypes, TaskState } from "./taskReducer.types";

const initialState: TaskState = {
  id: 0,
  title: "1",
  description: "",
  priority: undefined,
  creationTime: new Date(),
  endTime: new Date(),
  durationInSeconds: 0,
  status: "queue",
  subtasks: [],
  attached: [],
  comments: [],
};

export const taskReducer = (state = initialState, action: TaskAction): TaskState => {
  switch (action.type) {
    case TaskActionTypes.get_task: {
      return { ...action.payload };
    }
    case TaskActionTypes.set_title: {
      return { ...state, title: action.payload };
    }
    default: {
      return state;
    }
  }
};
