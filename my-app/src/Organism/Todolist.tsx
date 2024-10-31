import React, { useState } from "react";
import Task from "../Molecules/Task";
import { taskItems, taskItems2, taskItems3 } from "../View/view";
import Search from "../Atoms/Search";
import Button from "../Atoms/Button";
import { taskType } from "../Molecules/Task";

const TodoList: React.FC = () => {
  return (
    <div>
      <div className="search__block">
        <Search />
        <Button title={"search"} id={NaN} />
      </div>

      <div>
        {taskItems.map((item) => {
          return <Task id={item.id} text={item.text} isDone={item.isDone} />;
        })}
      </div>
      {/* <div>
        <Task {...taskItems3} />
      </div>
      <div>
        {taskItems2.map((item) => {
          return <Task id={item.id} text={item.text} isDone={item.isDone} />;
        })}
      </div> */}
    </div>
  );
};
export default TodoList;
