import { ChangeEvent, KeyboardEvent, useState } from "react";
import { Button } from "../../Atoms/Button/Button";
import styles from "./GetName.module.css";
import Input from "../../Atoms/Input/Input";

type userType = {
  sendNameUser: (newNameUser: string) => void;
};

export const GetName = (prop: userType) => {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setMessage(/^[a-zA-Z]*$/.test(e.target.value) === false 
    ? "Invalid characters were used in the name" 
    : e.target.value.length > 10 
    ? "The name can't be so long" 
    : "");
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => e.key === "Enter" && prop.sendNameUser(value);
  const onButton = () => prop.sendNameUser(value);

  return (
    <div className={styles.block__getName}>
      <h2>Enter your name</h2>

      {value === "" ? (
        <div>
          <Input type="text" className="" value={value} onChange={handleChangeName} onKeyDown={onKeyDown} autoFocus={true} />
          <Button title={"send arr"} onClick={onButton} disabled={true}>Send</Button>
          <p>{message}</p>
        </div>
      ) : /^[a-zA-Z]{1,10}$/.test(value) === true ? (
        <div>
          <Input type="text" className="" value={value} onChange={handleChangeName} onKeyDown={onKeyDown} />
          <Button title={"send arr"} onClick={onButton}>Send</Button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <Input type="text" value={value} onChange={handleChangeName} onKeyDown={onKeyDown} className="invalid__input" />
          <Button title={"send arr"} onClick={onButton} disabled={true}>Send</Button>
          <p className={styles.invalid__message}>{message}</p>
        </div>
      )}
      
    </div>
  );

};
