import React, { KeyboardEvent, ChangeEvent, useState } from "react";
//import Task from "../Molecules/Task";
import Search from "../Atoms/Search";
import Button from "../Atoms/Button";
import { taskType } from "../Molecules/Task";
import { filterValueStyle } from "../App";

/*  type taskType = {
  id: number;
  text: string;
  isDone: boolean;
}; */

type PropsType = {
  user: string;
  tasks: taskType[];
  removeTask: (id: number) => void;
  changeFilter: (val: filterValueStyle) => void;
  addTask: (text: string) => void;
  changeStatus: (id: number) => void;
  filter: filterValueStyle;
};

export function TodoList(props: PropsType) {
  const [newTaskTitle, setNewTaskTitle] = useState(""); //пустая строка для ввода

  /*реакция на событие добавление задачи кнопка/ enter*/
  const onEventNewTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(e.currentTarget.value);
  };
  const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      props.addTask(newTaskTitle);
      setNewTaskTitle(""); //обнуление строки
    }
  };

  /* изменение данных в зависимости от нажатого фильтра*/
  const onAllClick = () => {
    props.changeFilter("all");
  };
  const onNotDoneClick = () => {
    props.changeFilter("active");
  };
  const onDoneClick = () => {
    props.changeFilter("done");
  };
  /*add task*/
  const addTask = () => {
    if (newTaskTitle.trim() !== "") {
      props.addTask(newTaskTitle);
      setNewTaskTitle("");
    }
  };

  return (
    <div className="wrapper">
      <h3> Tasks of User _____ {props.user}</h3>
      <div className="new__task__block">
        <input className={"input__new__task"} type="text" value={newTaskTitle} onChange={onEventNewTitle} onKeyDown={onKeyPress} />
        <button onClick={addTask}>+</button>
      </div>

      <ul>
        {props.tasks.map((i) => {
          const onRemove = () => {
            props.removeTask(i.id);
          };
          const onChange = (e: ChangeEvent<HTMLInputElement>) => {
            props.changeStatus(i.id);
          };

          return (
            <li key={i.id} className={i.isDone ? "task__block is__done":"task__block"}>
              <input type="checkbox" onChange={onChange} checked={i.isDone} />
              <span className={"text__task"}>{i.text}</span>
              <button onClick={onRemove}>X</button>
            </li>
          );
        })}
      </ul>

      <div className={"buttons__filter"}>
        <button onClick={onAllClick} className={props.filter === 'all' ? "active__filter" : ""}>All</button>
        <button onClick={onNotDoneClick}className={props.filter === 'active' ? "active__filter" : ""}>Active</button>
        <button onClick={onDoneClick}className={props.filter === 'done' ? "active__filter" : ""}>Done</button>
      </div>
    </div>
  );
}
