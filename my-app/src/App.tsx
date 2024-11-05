import React, { useState } from "react";
import "./App.css";
import { TodoList } from "./Organism/Todolist";
import { taskItems1, taskItems2, taskItems3, allUsers } from "./View/view";
import { taskType } from "./Molecules/Task";
import { title } from "process";
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
  function removeTask(id: number) {
    let result = tasks.filter((i) => i.id !== id);
    setTasks(result);
  }
  /*фильтрация по кнопкам*/
  let [filter, setFilter] = useState<filterValueStyle>("all"); //у всех значение all

  function changeFilter(val: filterValueStyle) {
    setFilter(val);
  }

  let tasksForToDoList = tasks;
  if (filter === "done") {
    tasksForToDoList = tasks.filter((i) => i.isDone === true);
  }
  if (filter === "active") {
    tasksForToDoList = tasks.filter((i) => i.isDone === false);
  }

  /*изменение  выполнена / не выполнена задача*/ //----------------------------

  function changeStatus(taskId: number /* , isDone: boolean */) {
    let task = tasks.find((i) => i.id === taskId); //true
    if (task) {
      task.isDone = !task.isDone;
    }
    setTasks([...tasks]);
  }

  /*колбэк F поднимаем значение вверх (к APP) изменяет значение Title */

  function changeTaskTitle(taskId: number, newTitle: string) {
    //находим нужную таску
    let task = tasks.find((i) => i.id === taskId); //true
    //изменяем таску если нашлась
    if (task) {
      task.title = newTitle;
    }
    //засетаем в стэйт копию объекта, чтобы реакт перерисовал
    setTasks([...tasks]);
  }

  /*добавление задачи*/
  function addTask(title: string) {
    let newTask = {
      id: tasks.length + 1,
      title: title,
      isDone: false,
    };

    let newTasks = [newTask, ...tasks]; //новый объект массива - add new task в начало массива и добавляем оставшийся массив
    setTasks(newTasks);
  }

  /*   function userWho() {
    let user = prompt("What is your name?","");
    if (user !== null) {
      return user;
    } else return "111";
  } */

  return (
    <div className="App">
      <header className="App-header">
        {/*         {        <div>
          <h4>Who are you?</h4>
          <input type="text" />
        </div>} */}

        <TodoList
          user={"NOONE"}
          tasks={tasksForToDoList}
          removeTask={removeTask}
          changeFilter={changeFilter}
          addTask={addTask}
          changeStatus={changeStatus}
          changeTaskTitle={changeTaskTitle}
          filter={filter}
          //userWho={userWho}
        />
      </header>
    </div>
  );
}

export default App;
