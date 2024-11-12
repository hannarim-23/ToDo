import React, {ChangeEvent, useState } from "react";

type userType = {
  nameUser: string;
  handleChangeName: (nameUser: string) => void;
};

export const GetName = (p: userType) => {
  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    let newNameUser = e.target.value;
    p.handleChangeName(newNameUser);
  };

  if (typeof p.nameUser === "string" && p.nameUser !== "") {
    return (
      <div>
        <h4>Who are you?</h4>
        <input type="text" value={p.nameUser} onChange={handleChangeName} />
        <h3>
          Tasks for User <span className="nameUser">{p.nameUser} </span>not found
        </h3>
      </div>
    );
  } else {
    return (
      <div>
        <h4>Who are you?</h4>
        <input type="text" value={p.nameUser} onChange={handleChangeName} />
        <h3>Enter your name</h3>
      </div>
    );
  }
};
