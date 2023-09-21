import { ITask } from "./task";

export interface ITaskList {
  id: number;
  title: string;
  tasks: Array<ITask>;
}
