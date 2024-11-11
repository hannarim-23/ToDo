import React, { KeyboardEvent, ChangeEvent, useState } from "react";
import { taskType, taskType2 } from "../View/view";
import { taskItems2 } from "../View/view";


/* export const GetName = (nameUser:string) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let newNameUser = e.target.value;
    setNameUser(newNameUser[0].toUpperCase() + newNameUser.slice(1));
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      let newNameUser = e.currentTarget.value;
      setNameUser(newNameUser[0].toUpperCase() + newNameUser.slice(1));
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h4>Who are you?</h4>
          <input type="text" value={nameUser} onChange={handleChange} onKeyDown={onKeyDown} />
          <h3>
            Tasks for User <span className="nameUser">{nameUser} </span>not found
          </h3>
        </div>
      </header>
    </div>
  );
};
 */