import { ITask } from "./task";

export interface IProject {
  id: number;
  title: string;
  tasks: Array<ITask>;
}
