import React, { useState } from "react";
import "./App.css";
import { TodoList } from "./Organism/Todolist";
import { taskItems1, taskItems2, taskItems3 } from "./View/view";
import { taskType } from "./Molecules/Task";
export type filterValueStyle = "all" | "active" | "done"; //тип для фильтра

function App() {
  let taskItems = taskItems1;
  let [tasks, setTasks] = useState<taskType[]>(taskItems);//присвоение начального значения

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


/*изменение  выполнена / не выполнена задача*///----------------------------

  function changeStatus(taskId: number/* , isDone: boolean */) {
    let task = tasks.find((i) => i.id === taskId);
    if (task) {
      task.isDone = task.isDone;
    }
    setTasks([...tasks]);
  }
/*добавление задачи*/
  function addTask(text: string) {
    let newTask = {
      id: tasks.length+1,
      text: text,
      isDone: false,
    };

    let newTasks = [newTask, ...tasks];//новый объект массива - add new task в начало массива и добавляем оставшийся массив
    setTasks(newTasks);
  }



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
        />
      </header>
    </div>
  );
}

export default App;