import { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import {
  getAllProjectTasksAction,
  useAppDispatch,
  useAppSelector,
} from "../../store";
import { CardList } from "../../components";
import s from "./project.module.scss";
import { ITask } from "../../models";
import { ICardsGroup, cardsMock } from "../../mock";

export const Project: React.FC = () => {
  // const { tasks } = useAppSelector((state) => state.project);
  const [state, setState] = useState<ICardsGroup[]>(cardsMock);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllProjectTasksAction());
  }, []);
  // useEffect(() => {
  //   console.log(tasks);

  //   setState([...tasks]);
  //   console.log(tasks, state);
  // }, [tasks]);
  const handleOnDragEnd = (result: any) => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }
    const sourceId = source.droppableId;
    const destinationId = destination.droppableId;
    const currentCard = state.find(
      ({ group }) => group.toLowerCase() === sourceId
    )?.items[source.index];

    console.log(currentCard);
    const newState = state.map(({ group, items }) => {
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

    setState(newState);
  };
  return (
    <div className={s.project__wrapper}>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <CardList title="Queue" cards={state[0].items} />
        <CardList title="Development" cards={state[1].items} />
        <CardList title="Done" cards={state[2].items} />
      </DragDropContext>
    </div>
  );
};
