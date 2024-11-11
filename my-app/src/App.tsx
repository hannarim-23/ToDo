import React, { KeyboardEvent, ChangeEvent, useState } from "react";
import "./App.css";
import { TodoList } from "./Organism/Todolist";
import { taskItems1 /*,  taskItems2, taskItems3, allUsers  */ } from "./View/view";
import { taskType } from "./Molecules/Task";
import { title } from "process";
import Button from "./Atoms/Button";
export type filterValueStyle = "all" | "active" | "done"; //тип для фильтра

/* export type valueUser = "ivan" | "yana" | "dima"; //тип для фильтра
let tasksForUser = allUsers;
if (user === "ivan") {
  taskItems = allUsers[0];
}
if (user === "yana") {
  taskItems = allUsers[1];
}
if (user === "dima") {
  taskItems = allUsers[2];
}

let [user, setUser] = useState<valueUser>("");
 */

function App() {
  let taskItems = taskItems1;
  let [tasks, setTasks] = useState<taskType[]>(taskItems); //присвоение начального значения

  /*удаление задачи */
  const removeTask = (id: number) => {
    let result = tasks.filter((i) => i.id !== id);
    setTasks(result);
  };
  /*фильтрация по кнопкам*/
  let [filter, setFilter] = useState<filterValueStyle>("all"); //у всех значение all

  const changeFilter = (val: filterValueStyle) => setFilter(val);

  let tasksForToDoList = tasks;
  if (filter === "done") {
    tasksForToDoList = tasks.filter((i) => i.isDone === true);
  }
  if (filter === "active") {
    tasksForToDoList = tasks.filter((i) => i.isDone === false);
  }

  /*изменение  выполнена / не выполнена задача*/ //----------------------------

  const changeStatus = (taskId: number /* , isDone: boolean */) => {
    let task = tasks.find((i) => i.id === taskId); //true
    if (task) {
      task.isDone = !task.isDone;
    }
    setTasks([...tasks]);
  };

  /*колбэк F поднимаем значение вверх (к APP) изменяет значение Title */

  const changeTaskTitle = (taskId: number, newTitle: string) => {
    //находим нужную таску
    let task = tasks.find((i) => i.id === taskId); //true
    //изменяем таску если нашлась
    if (task) {
      task.title = newTitle;
    }
    //засетаем в стэйт копию объекта, чтобы реакт перерисовал
    setTasks([...tasks]);
  };
  /*колбэк F поднимаем значение вверх (к APP) изменяет значение comment */
  const changeTaskComment = (taskId: number, newComment: string) => {
    //находим нужную таску
    let task = tasks.find((i) => i.id === taskId); //true
    //изменяем таску если нашлась
    if (task) {
      task.comment = newComment;
    }
    //засетаем в стэйт копию объекта, чтобы реакт перерисовал
    setTasks([...tasks]);
  };

  /* sort tasks title */
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

  /*добавление задачи*/
  const addTask = (title: string) => {
    let newTask = {
      id: tasks.length + 1,
      title: title,
      comment: "...comment...",
      date: new Date(),
      isDone: false,
    };

    let newTasks = [newTask, ...tasks]; //новый объект массива - add new task в начало массива и добавляем оставшийся массив
    setTasks(newTasks);
  };

  /* имя пользователя */
  const [nameUser, setNameUser] = useState("");

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
        </div>

        <TodoList
          user={nameUser}
          tasks={tasksForToDoList}
          removeTask={removeTask}
          changeFilter={changeFilter}
          addTask={addTask}
          changeStatus={changeStatus}
          changeTaskTitle={changeTaskTitle}
          changeTaskComment={changeTaskComment}
          filter={filter}
          sortTasksTitle={sortTasksTitle}
          sortTasksDate={sortTasksDate}
          sortTasksDateEnd={sortTasksDateEnd}
        />
      </header>
    </div>
  );
}

export default App;
