import { useState } from "react";
import "./App.css";
import { GetName } from "./Molecules/GetName/GetName";
import { ListOfUser } from "./Organism/ListOfUser/ListOfUser";

const App = () => {
  const [nameUser, setNameUser] = useState("");

  const sendName = (newNameUser: string) => {
    setNameUser(newNameUser ? newNameUser[0].toUpperCase() + newNameUser.slice(1) : "");
  };
//лучше сделать отдельной ф-цией или внедрить в код сразу?
  /*   const view = () => {
    return nameUser !== "" ? 
    <ListOfUser nameUser={nameUser} /> 
    : <GetName sendNameUser={sendName}></GetName>;
  }; */

  return (
    <div className="App">
      <header></header>
      {/*       <body className="App-body">{view()}</body> */}
      <body className="App-body">{ 
      nameUser !== "" 
      ? <ListOfUser nameUser={nameUser} /> 
      : <GetName sendNameUser={sendName}></GetName>}</body>
    </div>
  );
};

export default App;
