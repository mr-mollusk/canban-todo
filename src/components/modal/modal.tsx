import { useState } from "react";
import { IModal } from "./modal.types";
import s from "./modal.module.css";
import classNames from "classnames";

export const Modal: React.FC<IModal> = ({ children, isOpen, onClose }) => {
  return (
    <div className={classNames(s.modal, { [s.active]: isOpen })}>
      {children}
    </div>
  );
};
