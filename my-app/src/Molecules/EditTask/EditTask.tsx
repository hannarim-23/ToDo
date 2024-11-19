import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import { Button } from "../../Atoms/Button/Button";
import { readDate } from "../../Atoms/Date/Date";

type editTitleType = {
  title: string;
  id: number;
  comment: string;
  date: Date;
  isDone: boolean;
  onChangeTask: (newTitle: string, newComment: string) => void;
  //onRemove: () => void; //
};

export const EditTask = (props: editTitleType) => {
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");

  /*   const [value, setValue] = useState({title: "", comment: ""})
  const activatedEditMode = () => setEditMode(editMode);
  const activatedViewMode = () => setEditMode(!editMode); */

  /*   const onChange = (val: string, type: string) => {
    //запись нового значения, колбэком поднимаем значение вверх (к APP)
    setValue({ ...value, [type]: val }); //------------???
  }; */

  //const [tasks, setTasks] = useState<taskType[]>(taskItems2[0].tasks); //присвоение начального значения

  const activatedEditMode = () => {
    setEditMode(true);
    setTitle(props.title);
    setComment(props.comment);
    props.onChangeTask(title, comment);
  };
  const activatedViewMode = () => {
    setEditMode(false);
    props.onChangeTask(title, comment);
  };

  const onChangeTask = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.name === "comment" && setComment(e.currentTarget.value);
    e.target.name === "title" && setTitle(e.currentTarget.value);
  };

  /*   const onRemove = () => {
    console.log("props.id", props.id);
    return props.id
    //setId( props.id);
  }; */

  /*   return editMode ? (
    <div className="task__for__edit">   
      <input name="title" value={value.title} onChange={(e)=>onChange(e.target.value, "title")} />
      <input name="comment" value={value.comment} onChange={(e)=>onChange(e.target.value, "comment")}/>
      <Button title={"save"} onClick={activatedViewMode} disabled={props.isDone}/>

    </div>
  ) : (
    <div className="task__for__edit">
      <div className="text__task">
        <p className={"title__task"} onClick={activatedEditMode}>
          {props.title}
        </p>
        <p className={"comment__task"} onClick={activatedEditMode}>
          {props.comment}
        </p>
        <span className={"date"}>{readDate(props.date)}</span>
      </div>
      <Button title={"edit"} onClick={activatedEditMode} disabled={props.isDone}/>
    </div>
  );
};


 */

  return editMode ? (
    <div className="task__for__edit">
      <input name="title" value={title} onChange={onChangeTask} />
      <input name="comment" value={comment} onChange={onChangeTask} />
      <Button title={"save"} onClick={activatedViewMode} disabled={props.isDone} />
    </div>
  ) : (
    <div className="task__for__edit">
      <div className="text__task">
        <p className={"title__task"} onClick={activatedEditMode}>
          {props.title}
        </p>
        <p className={"comment__task"} onClick={activatedEditMode}>
          {props.comment}
        </p>
        <span className={"date"}>{readDate(props.date)}</span>
      </div>
      <Button title={"edit"} onClick={activatedEditMode} disabled={props.isDone} />
    </div>
  );
};
