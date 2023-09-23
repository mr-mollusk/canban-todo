import { useState } from "react";
import s from "./cardPreview.module.scss";
import { ICardPreview } from "./cardPreview.types";
import { Card } from "../card/card";
import { Draggable } from "react-beautiful-dnd";

export const CardPreview: React.FC<ICardPreview> = ({ id, title, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Draggable key={id} draggableId={`draggable-${id}`} index={index}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            onClick={onOpen}
            className={s.trigger}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <h3>{title}</h3>
          </div>
        )}
      </Draggable>

      <Card isOpen={isOpen} onClose={onClose} />
    </>
  );
};
