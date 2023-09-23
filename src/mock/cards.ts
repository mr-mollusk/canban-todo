import { ITask } from "../models";

export interface ICardsGroup {
  group: string;
  items: Array<ITask>;
}
export const cardsMock: Array<ICardsGroup> = [
  {
    group: "Queue",
    items: [],
  },
  {
    group: "Development",
    items: [],
  },
  {
    group: "Done",
    items: [],
  },
];
