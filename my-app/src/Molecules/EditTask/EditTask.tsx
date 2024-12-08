import { useState, ChangeEvent } from "react";
import { Button } from "../../Atoms/Button/Button";
import Date from "../../Atoms/Date/Date";
import styles from "./EditTask.module.css";
import Input from "../../Atoms/Input/Input";

type editTitleType = {
  title: string;
  id: number;
  comment: string;
  date: Date;
  isDone: boolean;
  onChangeTask: (newTitle: string, newComment: string) => void;
};

export const EditTask = (props: editTitleType) => {
  const [editMode, setEditMode] = useState(false);
  const [value, setValue] = useState({ title: "", comment: "" });

  const activatedEditMode = () => {
    setEditMode(true);
    setValue({ title: props.title, comment: props.comment });
    props.onChangeTask(value.title, value.comment);
  };
  const activatedViewMode = () => {
    setEditMode(false);
    props.onChangeTask(value.title, value.comment);
  };

  const onChangeTask = (e: ChangeEvent<HTMLInputElement>) => {
    //запись нового значения, колбэком поднимаем значение вверх (к APP)
    setValue({ title: e.target.name === "title" ? e.currentTarget.value : value.title, comment: e.target.name === "comment" ? e.currentTarget.value : value.comment });
  };

  return editMode ? (
    <div className={styles["task__for__edit"]}>
      <div className={styles["task__information"]}>
        <Input type="text" className="input__change" name="title" value={value.title} onChange={onChangeTask}></Input>
        <Input type="text" className="input__change" name="comment" value={value.comment} onChange={onChangeTask}></Input>
        <Date date={props.date} />
      </div>
      <Button title={"save"} onClick={activatedViewMode} disabled={props.isDone}>
        Save
      </Button>
    </div>
  ) : (
    <div className={styles["task__for__edit"]}>
      <div className={styles["task__information"]}>
        <p className={styles["title__task"]}>{props.title}</p>
        <p className={styles["comment__task"]}>{props.comment}</p>
        <Date date={props.date} />
      </div>
      <Button title="edit" onClick={activatedEditMode} disabled={props.isDone}>
        Edit
      </Button>
    </div>
  );
};
