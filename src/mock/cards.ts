import { ITask } from "../models";

export interface ICardsGroup {
  group: string;
  items: Array<ITask>;
}
export const cardsMock: Array<ICardsGroup> = [
  {
    group: "Queue",
    items: [
      {
        id: 0,
        title: "Крутая таска",
        status: "queue",
        creationTime: new Date(),
        durationInSeconds: 0,
      },
      {
        id: 1,
        title: "А эта круче",
        status: "queue",
        creationTime: new Date(),
        durationInSeconds: 0,
      },
      {
        id: 2,
        title: "Ну тут такое себе",
        status: "queue",
        creationTime: new Date(),
        durationInSeconds: 0,
      },
    ],
  },
  {
    group: "Development",
    items: [
      {
        id: 3,
        title: "Эта таска делается прямо сейчас",
        status: "development",
        creationTime: new Date(),
        durationInSeconds: 0,
      },
      {
        id: 4,
        title: "Прям щас её фигачу",
        status: "development",
        creationTime: new Date(),
        durationInSeconds: 0,
      },
    ],
  },
  {
    group: "Done",
    items: [
      {
        id: 5,
        title: "А эта всё.",
        status: "done",
        creationTime: new Date(),
        durationInSeconds: 0,
      },
    ],
  },
];
