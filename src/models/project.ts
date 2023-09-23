import { ICardsGroup, ITask } from "./task";

export interface IProject {
  id: number;
  title: string;
  tasks: Array<ICardsGroup>;
}
