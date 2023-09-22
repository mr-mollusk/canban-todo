import { ICardList } from "./cardList.types";
import s from "./cardList.module.scss";
import { CardPreview } from "../cardPreview/cardPreview";
import { Draggable, Droppable } from "react-beautiful-dnd";

export const CardList: React.FC<ICardList> = ({ title, cards }) => {
  return (
    <div className={s.cardlist}>
      <h2>{title}</h2>
      <Droppable droppableId={title.toLowerCase()}>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef} className={s.cardlist__droppable}>
            {cards.map(({ id, title }, index) => (
              <Draggable key={id} draggableId={`draggable-${id}`} index={index}>
                {(provided) => (
                  <div
                  style={{width: '100%'}}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <CardPreview id={id} key={id} title={title} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};
/*
 */
