import React from "react";
import { taskItems } from "../View/view";

type ButtonType = {
  title: string;
  id: number;
  // removeTask: ()=>void;
};

const Button = (props: ButtonType) => {
  return <button className={props.title + "__task__button"} /* onClick={props.removeTask} */>{props.title[0].toUpperCase() + props.title.slice(1)}</button>;
};

export default Button;

/* export function removeTask(id:number) {
  let resultTasks = tasks.filter((t)=> (t.id !== id) return true;)
} */
/*
function clickMe2(event: React.MouseEvent<HTMLButtonElement>) {
  alert("You DEL");
}*/
/*
export function delEditTask(t:string, i:number){
  let tasks;
  if (t==="del"){ tasks = taskItems.filter(t=>t.id !==i)
    tasks.map((item)=> alert(item));
  }


}


*/

/* 
const Button = (props: ButtonType) => {
  return (
    <button onClick={(e)=> clickMe(props.title)(e)} className={props.title + "__task__button"}>
      {props.title[0].toUpperCase() + props.title.slice(1)}
    </button>
  );
};

export default Button;

function clickMe(props: string, event: React.MouseEvent<HTMLButtonElement>) {
  return props === "del" ? alert("You DEL") : alert("You REMOVE");
}  */

/* function clickMe(event: React.MouseEvent<HTMLButtonElement>) {
  alert("You DEL");
} */
