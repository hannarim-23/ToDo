import React, { useState } from "react";
import "./App.css";
import { GetName } from "./Molecules/GetName/GetName";
import { ListOfUser } from "./Organism/ListOfUser";

const App = () => {
  const [nameUser, setNameUser] = useState("");
  const sendName = (newNameUser: string) => {
    setNameUser(newNameUser ? newNameUser[0].toUpperCase() + newNameUser.slice(1) : "");
  };

  return nameUser !== "" ? (
    <div className="App">
      <header></header>
      <body className="App-body">
        <ListOfUser nameUser={nameUser} />
      </body>
    </div>
  ) : (
    <div className="App">
      <header></header>
      <body className="App-body">
        <GetName sendNameUser={sendName}></GetName>
      </body>
    </div>
  );
};

export default App;
