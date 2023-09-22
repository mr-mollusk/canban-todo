import { useState } from "react";
import s from "./cardPreview.module.scss";
import { ICardPreview } from "./cardPreview.types";
import { Card } from "../card/card";

export const CardPreview: React.FC<ICardPreview> = ({ id, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div onClick={onOpen} className={s.trigger}>
        <h3>{title}</h3>
      </div>

      <Card isOpen={isOpen} onClose={onClose} />
    </>
  );
};
