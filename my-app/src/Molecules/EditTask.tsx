import React, { useState, ChangeEvent } from "react";
import Button from "../Atoms/Button";
import { readDate } from "../Atoms/Date";

type editTitleType = {
  title: string;
  id: number;
  comment: string;
  date: Date;
  onChangeTitle: (newValue: string) => void;
  onChangeComment: (newValue: string) => void;
  /*   onRemove:(newValue: string) => void; */
};

export function EditTitle(props: editTitleType) {
  let [editMode, setEditMode] = useState(false);
  let [title, setTitle] = useState("");
  let [comment, setComment] = useState("");

  const activatedEditMode = () => {
    setEditMode(true);
    setTitle(props.title);
    setComment(props.comment);
  };
  const activatedViewMode = () => {
    setEditMode(false);
    props.onChangeTitle(title);
    props.onChangeComment(comment);
  };

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    //запись нового значения, колбэком поднимаем значение вверх (к APP)
    setTitle(e.currentTarget.value);
  };
  const onChangeComment = (e: ChangeEvent<HTMLInputElement>) => {
    //запись нового значения, колбэком поднимаем значение вверх (к APP)
    setComment(e.currentTarget.value);
  };

  return editMode ? (
    <div className="task__for__edit">
      <input value={title} onChange={onChangeTitle} />
      <br />
      <input value={comment} onChange={onChangeComment} />

      <Button nameButton={"save"} funOnClick={activatedViewMode} />
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
      <Button nameButton={"edit"} funOnClick={activatedEditMode} />
      {/*       <Button nameButton={"del"} funOnClick={onRemove} /> */}
    </div>
  );
}
