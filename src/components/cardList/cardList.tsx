import { Card } from "..";
import { ICardList } from "./cardList.types";
import s from "./cardList.module.scss";
import { CardPreview } from "../cardPreview/cardPreview";

export const CardList: React.FC<ICardList> = ({ title, cards }) => {
  return (
    <div className={s.cardlist}>
      <h2>{title}</h2>
      {cards.map(({ id, title, description }) => (
        <CardPreview id={id} key={id} title={title} />
      ))}
    </div>
  );
};
