import React, { KeyboardEvent, ChangeEvent, useState, useEffect } from "react";
import "./App.css";
import { TodoList } from "./Organism/Todolist";
import { taskItems1, taskItems2 } from "./View/view";
import { taskType, taskType2 } from "./View/view";
import { GetName } from "./Atoms/GetName";
//import Button from "./Atoms/Button";
export type filterValueStyle = "all" | "active" | "done"; //тип для фильтра

function App() {
  let [tasks, setTasks] = useState<taskType[]>(taskItems1); //присвоение начального значения
  /*   console.log("------tasks-------", tasks); */

  /*set Name of user */
  const [nameUser, setNameUser] = useState(""); //имя пользователя
  const handleChangeName = (newNameUser: string) => {
    setNameUser(newNameUser ? newNameUser[0].toUpperCase() + newNameUser.slice(1) : "");
  };

  //  let [tasks, setTasks] = useState<taskType[]>();
  //  let [tasks2, setTasks2] = useState<taskType2[]>(taskItems2);
  //  console.log("------tasks2-------", tasks2);

  /*   let tasks1 = taskItems2.find((i) => i.user === nameUser); 
  if (tasks1) {
    setTasks(tasks1.tasks);
  }
  console.log("------tasks1-------", tasks1?.tasks); */

  useEffect(() => {
    console.log("------++++++-------");
    handleChangeName(nameUser);
  }, [nameUser]);

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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let newNameUser = e.target.value;
    setNameUser(newNameUser ? newNameUser[0].toUpperCase() + newNameUser.slice(1) : "");
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      let newNameUser = e.currentTarget.value;
      setNameUser(newNameUser ? newNameUser[0].toUpperCase() + newNameUser.slice(1) : "");
    }
  };

  if (nameUser === "Ivan" || nameUser === "Sergey") {
    return (
      <div className="App">
        <header className="App-header">
          <GetName nameUser={nameUser} handleChangeName={handleChangeName}></GetName>
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
  } else {
    return (
      <div className="App">
        <header className="App-header">
          <GetName nameUser={nameUser} handleChangeName={handleChangeName}></GetName>
        </header>
      </div>
    );
  }
}

export default App;
