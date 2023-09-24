import { ICardList } from "./cardList.types";
import s from "./cardList.module.scss";
import { CardPreview } from "../cardPreview/cardPreview";
import { Droppable } from "react-beautiful-dnd";
import {
  ChangeEvent,
  KeyboardEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import { createNewCard } from "../../api";
import { getAllProjectTasksAction, useAppDispatch } from "../../store";
import { useParams } from "react-router-dom";

export const CardList: React.FC<ICardList> = ({ title, cards }) => {
  const [newCard, setNewCard] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const { projectId } = useParams();

  useEffect(() => {
    inputRef.current?.focus();
  }, [newCard]);

  const handleAddNewCard = () => {
    setNewCard(true);
  };
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleOnEnterDown: KeyboardEventHandler<HTMLInputElement> = async (
    e
  ) => {
    if (e.key === "Enter") {
      if (inputValue !== "" && projectId) {
        const data = await createNewCard(+projectId, inputValue, "Queue");
        if (data && projectId) {
          dispatch(getAllProjectTasksAction(+projectId));
        }
      }
      setInputValue("");
      setNewCard(false);
    }
  };
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
      {newCard ? (
        <div className={s.placeholder}>
          <input
            className={s.placeholder__input}
            onChange={handleOnChange}
            onKeyDown={handleOnEnterDown}
            value={inputValue}
            ref={inputRef}
          />
        </div>
      ) : (
        title === "Queue" && (
          <button onClick={handleAddNewCard} className={s.button}>
            Добавить карточку
          </button>
        )
      )}
    </div>
  );
};
/*
 */
