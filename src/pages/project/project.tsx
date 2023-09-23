import { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import {
  getAllProjectTasksAction,
  useAppDispatch,
  useAppSelector,
} from "../../store";
import { CardList } from "../../components";
import s from "./project.module.scss";
import { ICardsGroup, cardsMock } from "../../mock";
import { setNewCardsOrderForProject } from "../../api";
import { ITask } from "../../models";

export const Project: React.FC = () => {
  const { tasks } = useAppSelector((state) => state.project);
  // const [state, setState] = useState<ICardsGroup[]>(cardsMock);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllProjectTasksAction());
  }, []);

  const handleOnDragEnd = (result: any) => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    const sourceId = source.droppableId;
    const destinationId = destination.droppableId;
    const currentCard = tasks.find(
      ({ group }) => group.toLowerCase() === sourceId
    )?.items[source.index];

    tasks.map(({ group, items }) => {
      if (sourceId !== destinationId) {
        if (group.toLowerCase() === sourceId) {
          items.splice(source.index, 1);
          return { group: group, items: items };
        }
        if (group.toLowerCase() === destinationId && currentCard) {
          items.splice(destination.index, 0, currentCard);
          return {
            group: group,
            items: items,
          };
        }
      } else if (group.toLowerCase() === sourceId && currentCard) {
        items.splice(source.index, 1);
        items.splice(destination.index, 0, currentCard);
        return { group: group, items: items };
      }
      return { group: group, items: items };
    });

    const newOrder = tasks.map(({ group, items }) => ({
      status: group,
      items: items.map((item) => item.id),
    }));

    setNewCardsOrderForProject(2, newOrder);
  };

  const sortByIndex = (a: ITask, b: ITask) => a.index - b.index;
  return (
    <div className={s.project__wrapper}>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <CardList title="Queue" cards={tasks[0].items.sort(sortByIndex)} />
        <CardList
          title="Development"
          cards={tasks[1].items.sort(sortByIndex)}
        />
        <CardList title="Done" cards={tasks[2].items.sort(sortByIndex)} />
      </DragDropContext>
    </div>
  );
};
