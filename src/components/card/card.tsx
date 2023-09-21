import { useState } from "react";
import { Modal } from "../modal";
import s from "./card.module.scss";
import { useAppSelector } from "../../store/hooks/useAppSelector";
import { ICard } from "./card.types";

export const Card: React.FC<ICard> = ({ isOpen, onClose }) => {
  const taskState = useAppSelector((state) => state.task);

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
              <p>{taskState.description}</p>
            </div>
            <div>
              <h2>Комментарии:</h2>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
