import { useEffect } from "react";
import { Modal } from "../modal";
import s from "./card.module.scss";
import { useAppSelector } from "../../store/hooks/useAppSelector";
import { ICard } from "./card.types";
import { getTaskByIdAction, useAppDispatch } from "../../store";

export const Card: React.FC<ICard> = ({ id, isOpen, onClose }) => {
  const taskState = useAppSelector((state) => state.task);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (isOpen) dispatch(getTaskByIdAction(id));
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={s.card}>
        <div className={s.card__overlay} />
        <div className={s.card__wrapper}>
          <div className={s.card__header}>
            <h1>{taskState.title}</h1>
            <button className={s.card__button} onClick={onClose}>
              x
            </button>
          </div>
          <div className={s.card__body}>
            <div>
              <h2>Описание:</h2>
              {taskState.description ? (
                <p>{taskState.description}</p>
              ) : (
                <p>Добавьте описание</p>
              )}
            </div>
            {taskState.comments?.length && (
              <div>
                <h2>Комментарии:</h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};
