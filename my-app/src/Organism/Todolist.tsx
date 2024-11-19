import React, { KeyboardEvent, ChangeEvent, useState } from "react";
import { Button } from "../Atoms/Button/Button";
import { taskType, taskType2 } from "../View/view";
import { filterValueStyle } from "./ListOfUser";
import { EditTask } from "../Molecules/EditTask/EditTask";

type PropsType = {
  user: string;
  tasks: taskType[];
  removeTask: (id: number) => void;
  changeFilter: (val: filterValueStyle) => void;
  addTask: (title: string) => void;
  changeStatus: (id: number) => void;
  filter: filterValueStyle;
  changeTask: (id: number, newComment: string, newTitle: string) => void;
  sortTasksTitle: () => void;
  sortTasksDate: () => void;
  sortTasksDateEnd: () => void;
};

export const TodoList = (props: PropsType) => {
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

  /* изменение данных в зависимости от нажатого фильтра*/ /* Сделать одной функцией */
  const onAllClick = () => props.changeFilter("all");
  const onNotDoneClick = () => props.changeFilter("active");
  const onDoneClick = () => props.changeFilter("done");

  /*add task*/ //упростить до 2х строк
  const addTask = () => {
    if (newTaskTitle.trim() !== "") {
      props.addTask(newTaskTitle);
      setNewTaskTitle("");
    }
  };

  /* sort tasks */
  const onSortTasksTitle = () => props.sortTasksTitle();
  const onSortTasksDate = () => props.sortTasksDate();
  const onSortTasksDateEnd = () => props.sortTasksDateEnd();

  return (
    <div className="wrapper">
      <h3>
        Tasks of User <span className="nameUser">{props.user}</span>
      </h3>

      <div className="new__task__block">
        <input className={"input__new__task"} type="text" value={newTaskTitle} onChange={onEventNewTitle} onKeyDown={onKeyPress} />
        <Button title={"add"} onClick={addTask} />
      </div>

      <ul>
        {props.tasks.map((i) => {
          const onRemove = () => props.removeTask(i.id);
          const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => props.changeStatus(i.id);
          const onChangeTask = (newComment: string, newTitle: string) => {
            props.changeTask(i.id, newComment, newTitle);
          };

          return (
            <li key={i.id} className={i.isDone ? "task__block is__done" : "task__block"}>
              <input type="checkbox" onChange={onChangeStatus} checked={i.isDone} />
              <EditTask id={i.id} title={i.title} comment={i.comment} date={i.date} isDone={i.isDone} onChangeTask={onChangeTask} /* onRemove={onRemove} */ />
              {<Button title={"del"} onClick={onRemove} /* disabled={i.isDone} */ />}
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
        <div className="sort__block">
          <div className="sort__content">
            <p onClick={onSortTasksTitle}>Sort by Title</p>
            <p onClick={onSortTasksDateEnd}>Sort by Date(end)</p>
            <p onClick={onSortTasksDate}>Sort by Date</p>
          </div>
          <button className="sort__button">Sort</button>
        </div>
      </div>
    </div>
  );
};
