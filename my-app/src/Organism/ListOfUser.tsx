import React, { useState } from "react";
import { TodoList } from "./Todolist";
import { taskItems2, taskItems1 } from "../View/view";

type listType = {
  nameUser: string;
};
export type filterValueStyle = "all" | "active" | "done"; //тип для фильтра

export const ListOfUser = (props: listType) => {
  const [tasks, setTasks] = useState(taskItems2.find((i) => i.user === props.nameUser)?.tasks || []);
  // console.log("newNameUser-----", props.nameUser);
  //console.log("tasks-----", tasks);

  // Del task
  const removeTask = (id: number) => setTasks(tasks.filter((i) => i.id !== id));

  //фильтрация по кнопкам
  const [filter, setFilter] = useState<filterValueStyle>("all"); //у всех значение all
  const changeFilter = (val: filterValueStyle) => setFilter(val);

  let tasksForToDoList = tasks;
  filter === "done" && (tasksForToDoList = tasks.filter((i) => i.isDone === true));
  filter === "active" && (tasksForToDoList = tasks.filter((i) => i.isDone === false));

  /*изменение  выполнена / не выполнена задача*/
  const changeStatus = (taskId: number) => {
    const task = tasks.find((i) => i.id === taskId);
    task && (task.isDone = !task.isDone);
    setTasks([...tasks]);
  };

  //колбэк F поднимаем значение вверх (к APP) изменяет значение Title
  const changeTask = (taskId: number, newTitle: string, newComment: string) => {
    //находим нужную таску
    const task = tasks.find((i) => i.id === taskId); //true
    //изменяем таску если нашлась
    if (task) {
      task.title = newTitle;
      task.comment = newComment;
    }
    //засетаем в стэйт копию объекта, чтобы реакт перерисовал
    setTasks([...tasks]);
  };

  // sort tasks title
  const sortTasksTitle = () => {
    tasks.sort((a, b) => (a.title > b.title ? 1 : -1));
    setTasks([...tasks]);
  };
  const sortTasksDate = () => {
    tasks.sort((a, b) => (a.date > b.date ? 1 : -1));
    setTasks([...tasks]);
  };
  const sortTasksDateEnd = () => {
    tasks.sort((a, b) => (a.date < b.date ? 1 : -1));
    setTasks([...tasks]);
  };

  //add task
  const addTask = (title: string) => {
    const newTask = {
      id: tasks.length + 1,
      title: title,
      comment: "...comment...",
      date: new Date(),
      isDone: false,
    };
    const newTasks = [newTask, ...tasks]; //новый объект массива - add new task в начало массива и добавляем оставшийся массив
    setTasks(newTasks);
  };

  return (
    <body className="App-body">
      <TodoList
        user={props.nameUser}
        tasks={tasksForToDoList}
        removeTask={removeTask}
        changeFilter={changeFilter}
        addTask={addTask}
        changeStatus={changeStatus}
        changeTask={changeTask}
        filter={filter}
        sortTasksTitle={sortTasksTitle}
        sortTasksDate={sortTasksDate}
        sortTasksDateEnd={sortTasksDateEnd}
      />
    </body>
  );
};
