import { IComment } from "./comment";

export type TaskId = number;
export type AvaliableTasksPriorities = "high" | "medium" | "low";
export type AvaliableTasksStatuses = "queue" | "development" | "done";

export interface ITask {
  id: number;
  index: number;
  title: string;
  description?: string;
  createdDate: string;
  durationInSeconds: number;
  endTime?: string;
  priority?: AvaliableTasksPriorities;
  attached?: Array<string>;
  status: AvaliableTasksStatuses;
  subtasks?: Array<TaskId>;
  comments?: Array<IComment>;
}

export interface ICardsGroup {
  group: string;
  items: Array<ITask>;
}
