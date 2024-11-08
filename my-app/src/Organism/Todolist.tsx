import React, { KeyboardEvent, ChangeEvent, useState } from "react";
//import Task from "../Molecules/Task";
import Button from "../Atoms/Button";
import { taskType } from "../Molecules/Task";
import { filterValueStyle } from "../App";
import { EditTitle } from "../Molecules/EditTask";

type PropsType = {
  user: string;
  tasks: taskType[];
  removeTask: (id: number) => void;
  changeFilter: (val: filterValueStyle) => void;
  addTask: (title: string) => void;
  changeStatus: (id: number) => void;
  filter: filterValueStyle;
  changeTaskTitle: (id: number, newTitle: string) => void;
  changeTaskComment: (id: number, newComment: string) => void;
  //userWho:any;
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
      <h3>
        Tasks of User {props.user} _____ {/* {props.userWho} */}
        {/* {prompt("who","")} */}
      </h3>
      <div className="new__task__block">
        <input className={"input__new__task"} type="text" value={newTaskTitle} onChange={onEventNewTitle} onKeyDown={onKeyPress} />
        <Button nameButton={"add"} funOnClick={addTask} />
      </div>

      <ul>
        {props.tasks.map((i) => {
          const onRemove = () => {
            props.removeTask(i.id);
          };
          const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
            props.changeStatus(i.id);
          };
          const onChangeTitle = (newValue: string) => {
            props.changeTaskTitle(i.id, newValue);
          };
          const onChangeComment = (newValue: string) => {
            props.changeTaskComment(i.id, newValue);
          };

          return (
            <li key={i.id} className={i.isDone ? "task__block is__done" : "task__block"}>
              <input type="checkbox" onChange={onChangeStatus} checked={i.isDone} />
              <EditTitle title={i.title} id={i.id} comment={i.comment} date={i.date} /* onRemove={onRemove} */ onChangeTitle={onChangeTitle} onChangeComment={onChangeComment} />
              <Button nameButton={"del"} funOnClick={onRemove} />
            </li>
          );
        })}
      </ul>

      <div className={"buttons__filter"}>
        <button onClick={onAllClick} className={props.filter === "all" ? "active__filter" : ""}>
          All
        </button>
        <button onClick={onNotDoneClick} className={props.filter === "active" ? "active__filter" : ""}>
          Active
        </button>
        <button onClick={onDoneClick} className={props.filter === "done" ? "active__filter" : ""}>
          Done
        </button>
      </div>
    </div>
  );
}
