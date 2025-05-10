import { ChangeEvent, KeyboardEvent } from "react";
import styles from "./Input.module.css";

type InputType = {
  type: string;
  className: string;

  value?: string;
  checked?: boolean;
  disabled?: boolean;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  autoFocus?: boolean;
  name?: string;
};

const Input = ({ ...props }: InputType) => {
  switch (props.type) {
    case "text":
      return (
        <input
          type="text"
          value={props.value}
          onChange={props.onChange}
          onKeyDown={props.onKeyDown}
          autoFocus={props.autoFocus}
          placeholder={props.placeholder}
          className={styles[props.className]}
          name={props.name}
        ></input>
      );
    case "checkbox":
      return (
      <input 
      type="checkbox" 
      onChange={props.onChange} 
      checked={props.checked} 
      className={styles[props.className]}
      ></input>)

    default:
      return <input type=""></input>;
  }
};

export default Input;
