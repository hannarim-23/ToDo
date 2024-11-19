import React from "react";
import "./Button.css";

export type buttonType = {
  title: string;
  onClick?: () => void;
  disabled?: boolean; //???
};

export const Button = ({ title, onClick, disabled }: buttonType) => {
  return disabled === true ? (
    <button className={title + "__task__button button"} onClick={onClick} disabled>
      {title[0].toUpperCase() + title.slice(1)}
    </button>
  ) : (
    <button className={title + "__task__button button"} onClick={onClick}>
      {title[0].toUpperCase() + title.slice(1)}
    </button>
  );
};
