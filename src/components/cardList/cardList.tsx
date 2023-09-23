import { ICardList } from "./cardList.types";
import s from "./cardList.module.scss";
import { CardPreview } from "../cardPreview/cardPreview";
import { Droppable } from "react-beautiful-dnd";

export const CardList: React.FC<ICardList> = ({ title, cards }) => {
  return (
    <div className={s.cardlist}>
      <h2>{title}</h2>
      <Droppable droppableId={title.toLowerCase()}>
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={s.cardlist__droppable}
          >
            {cards.map(({ id, title }, index) => (
              <CardPreview id={id} key={id} title={title} index={index} />
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
