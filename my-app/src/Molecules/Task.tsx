import React from "react";
import Button from "../Atoms/Button";
import { taskItems } from "../View/view";
//import { delEditTask } from "../Atoms/Button";

export type taskType = {
  id: number;
  text: string;
  isDone: boolean;
};

const Task = (props: taskType) => {
  let id = props.id,
    isDone = props.isDone,
    text = props.text;

  return (
    <li className="task__block" id={String(id)}>
      <input type="checkbox" checked={isDone} />
      <span className="text__task">{text}</span>
      <div className="button__block">
        <Button title="del" id={props.id} />
        <Button title="edit" id={props.id} />
      </div>
    </li>
  );
  /*   return ( 

    <div className="task__block" id ={String(id)}>
      <input type="checkbox" checked={props.isDone} />
      <span className="text__task">{props.text}</span>
      <div className="button__block">
      <Button title = "del"/>
      <Button title = "edit"/>
      </div>
    </div>
  ); */
};

export default Task;
