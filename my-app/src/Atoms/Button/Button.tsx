import styles from "./Button.module.css";

export type buttonType = {
  title: string;
  onClick?: () => void;
  disabled?: boolean;
  children: string;
};

export const Button = ({ title, onClick, disabled, children }: buttonType) => {
  const nameBtn = children[0].toUpperCase() + children.slice(1);
//можно ли в модуль css передать несколько классов?
  return disabled === true ? (
    <button className={styles[title]} onClick={onClick} disabled>
      
      {/*   <button className={styles[`${title} ${all}`]} onClick={onClick} disabled> */}
      {nameBtn}
    </button>
  ) : (
    <button className={styles[title]} onClick={onClick}>
      {nameBtn}
    </button>
  );
};
