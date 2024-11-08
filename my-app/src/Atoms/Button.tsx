import React from "react";

type buttonType = {
  nameButton: string;
  funOnClick: () => void;
};

function Button(b: buttonType) {
  return (
    <button className={b.nameButton + "__task__button button"} onClick={b.funOnClick}>
      {b.nameButton[0].toUpperCase() + b.nameButton.slice(1)}
    </button>
  );
}

export default Button;
