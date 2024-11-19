import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { Button } from "../../Atoms/Button/Button";
import "./GetName.css";

type userType = {
  sendNameUser: (newNameUser: string) => void;
};

export const GetName = (prop: userType) => {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setMessage(/^[a-zA-Z]*$/.test(e.target.value) === false ? "Invalid characters were used in the name" : e.target.value.length > 10 ? "The name can't be so long" : "");
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => e.key === "Enter" && prop.sendNameUser(value);
  /*     if (e.key === "Enter") { //упростить
      prop.sendNameUser(value); //отслеживать value */

  const onButton = () => prop.sendNameUser(value);

  return value === "" ? (
    <div>
      <h2>Who are you?</h2>
      <input type="text" autoFocus={true} value={value} onChange={handleChangeName} onKeyDown={onKeyDown} />
      <Button title={"send"} onClick={onButton} disabled={true} />
      <p className="">Enter your name</p>
    </div>
  ) : /^[a-zA-Z]{1,10}$/.test(value) === true ? (
    <div>
      <h2>Who are you?</h2>
      <input type="text" value={value} onChange={handleChangeName} onKeyDown={onKeyDown} />
      <Button title={"send"} onClick={onButton} />
    </div>
  ) : (
    <div>
      <h2>Who are you?</h2>
      <input type="text" className="invalid__input" value={value} onChange={handleChangeName} onKeyDown={onKeyDown} />
      <Button title={"send"} onClick={onButton} disabled={true} />
      <p className="invalid__message">{message}</p>
    </div>
  );
};
