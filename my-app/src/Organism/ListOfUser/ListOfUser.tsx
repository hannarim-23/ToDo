import { useState } from "react";
import { TodoList } from "../ToDolist/Todolist";
import { taskItems2 } from "../../View/view";
import "./ListOfUser.css";
import { Button } from "../../Atoms/Button/Button";

type listType = {
  nameUser: string;
};

export const ListOfUser = (props: listType) => {
  const [tasks, setTasks] = useState(taskItems2.find((i) => i.user === props.nameUser)?.tasks || []);

  // Del task
  const removeTask = (id: number) => setTasks(tasks.filter((i) => i.id !== id));

  //фильтрация по кнопкам  --------------------переделать
  const [filter, setFilter] = useState("all"); //у всех значение all
  const changeFilter = (val: string) => setFilter(val);
  let tasksForToDoList = tasks;
  filter === "done" && (tasksForToDoList = tasks.filter((i) => i.isDone === true));
  filter === "active" && (tasksForToDoList = tasks.filter((i) => i.isDone === false));

  /*изменение  выполнена / не выполнена задача*/
  const changeStatus = (taskId: number) => {
    const task = tasks.find((i) => i.id === taskId);
    task && (task.isDone = !task.isDone);
    setTasks([...tasks]);
  };

  //колбэк F поднимаем значение вверх, изменяет значение
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

  // sort tasks title  //попробовать упростить******************
  /*   const sortTasks = (val: string) => {
    val === "title" ? (tasks.sort((a, b) => (a.date > b.date ? 1 : -1)), setTasks([...tasks])) //не нравится (",")
      : val === "dateEnd"
      ? (tasks.sort((a, b) => (a.date < b.date ? 1 : -1)), setTasks([...tasks]))
      : val === "dateStart"
      ? (tasks.sort((a, b) => (a.date > b.date ? 1 : -1)), setTasks([...tasks]))
      : setTasks([...tasks]);
  }; */
  /*   const sortTasks = (val: string) => {
    if (val === "title") {
      tasks.sort((a, b) => (a.date > b.date ? 1 : -1));
      setTasks([...tasks]);
    } else if (val === "dateEnd") {
      tasks.sort((a, b) => (a.date < b.date ? 1 : -1));
      setTasks([...tasks]);
    } else if (val === "dateStart") {
      tasks.sort((a, b) => (a.date > b.date ? 1 : -1));
      setTasks([...tasks]);
    } else setTasks([...tasks]);
  }; */

  const sortTasks = (val: string) => {
    switch (val) {
      case "title":
        return tasks.sort((a, b) => (a.title > b.title ? 1 : -1)), setTasks([...tasks]); //не нравится ","
      case "dateEnd":
        return [tasks.sort((a, b) => (a.date < b.date ? 1 : -1)), setTasks([...tasks])]; //норм ли возвращать массивом?
      case "dateStart":
        return tasks.sort((a, b) => (a.date > b.date ? 1 : -1)), setTasks([...tasks]);
      default:
        return setTasks([...tasks]);
    }
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
    const newTasks = [newTask, ...tasks]; //новый объект массива - add new task в начало и добавляем оставшийся массив
    setTasks(newTasks);
  };

  const refreshPage = () => {
    window.location.reload();
  };

  return tasks.length ? (
    <body className="App-body">
      <div className="wrapper">
        <Button title={"exit"} onClick={refreshPage}>
          {" "}
        </Button>
        <h3>
          Tasks of User <span className="nameUser">{props.nameUser}</span>
        </h3>
      </div>
      <TodoList tasks={tasksForToDoList} removeTask={removeTask} changeFilter={changeFilter} addTask={addTask} changeStatus={changeStatus} changeTask={changeTask} sortTasks={sortTasks} />
    </body>
  ) : (
    <body className="App-body">
      <div className="wrapper">
        <div>POSTS NOT FOUND</div>
        <Button title={"tryAgain"} onClick={refreshPage}>
          TRY AGAIN
        </Button>
      </div>
    </body>
  );
};
