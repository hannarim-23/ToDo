import { KeyboardEvent, ChangeEvent, useState } from "react";
import { Button } from "../../Atoms/Button/Button";
import { taskType } from "../../View/view";
import { EditTask } from "../../Molecules/EditTask/EditTask";
import "./ToDolist.css";
import Input from "../../Atoms/Input/Input";
import BtnsFilter from "../../Atoms/BtnsFilter/BtnsFilter";

type PropsType = {
  tasks: taskType[];
  removeTask: (id: number) => void;
  changeFilter: (val: string) => void;
  addTask: (title: string) => void;
  changeStatus: (id: number) => void;
  changeTask: (id: number, newComment: string, newTitle: string) => void;
  sortTasks: (val: string) => void;
};

export const TodoList = (props: PropsType) => {
  //пустая строка для ввода
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const variantsSorts = [
    { title: "title", name: "Sort by Title" },
    { title: "dateEnd", name: "Sort by date End" },
    { title: "dateStart", name: "Sort by date Start" },
  ];

  /*set active btn filter */
  const [activeVal, setActiveVal] = useState("all");
  const variantsFilter = ["all", "active", "done"];
  const arrayForButtons = variantsFilter;
  const onFilterClick = (val: string) => {
    props.changeFilter(val);
    setActiveVal(val);
  };

  /*реакция на событие добавление задачи кнопка/ enter*/
  const onEventNewTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(e.currentTarget.value);
  };

  const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    //---------------------------------------------почему не работает, когда в скобках 2 действия?
    //e.key === "Enter" ? (props.addTask(newTaskTitle), setNewTaskTitle("")) : console.log("jhuu");
    if (e.key === "Enter") {
      props.addTask(newTaskTitle);
      setNewTaskTitle("");
    }
  };

  /*add task*/
  const addTask = () => {
    newTaskTitle.trim() !== "" ? props.addTask(newTaskTitle.trim()) : newTaskTitle.trim();
    setNewTaskTitle("");
  };

  return (
    <div>
      <div className="new__task__block">
        <Input className={"new__task"} type="text" value={newTaskTitle} onChange={onEventNewTitle} onKeyDown={onKeyPress} />
        <Button title={"add"} onClick={addTask}>
          Add
        </Button>
      </div>

      <ul className="to__do__list">
        {props.tasks.map((i) => {
          const onRemove = () => props.removeTask(i.id);
          const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => props.changeStatus(i.id);
          const onChangeTask = (newComment: string, newTitle: string) => {
            props.changeTask(i.id, newComment, newTitle);
          };
          return (
            <li key={i.id} className={i.isDone ? "task__block is__done" : "task__block"}>
              <Input type="checkbox" onChange={onChangeStatus} checked={i.isDone} className="custom-checkbox__ToDo" />
              <EditTask id={i.id} title={i.title} comment={i.comment} date={i.date} isDone={i.isDone} onChangeTask={onChangeTask} /* onRemove={onRemove} */ />
              <Button title={"del"} onClick={onRemove}>
                Del
              </Button>
            </li>
          );
        })}
      </ul>

      <div className="buttons__filter">
        {arrayForButtons.map((item) => (
          <BtnsFilter handleClick={() => onFilterClick(item)} isActive={activeVal === item} title={item} />
        ))}

        <div className="sort__block">
          <div className="sort__content">
            {variantsSorts.map((i) => {
              return (
                <p title={"sort"} onClick={() => props.sortTasks(i.title)}>
                  {i.name}
                </p>
              );
            })}
          </div>
          <button className="sort__button">Sort</button>
        </div>
      </div>
    </div>
  );
};
