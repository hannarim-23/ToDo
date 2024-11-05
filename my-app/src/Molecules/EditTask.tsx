import React, { useState, ChangeEvent } from "react";

type editTitleType = {
  title: string;
  id: number;
  onChangeTitle: (newValue: string) => void;
};

export function EditTitle(props: editTitleType) {
  let [editMode, setEditMode] = useState(false);
  let [title, setTitle] = useState("");

  const activatedEditMode = () => {
    setEditMode(true);
    setTitle(props.title);
  };
  const activatedViewMode = () => {
    setEditMode(false);
    props.onChangeTitle(title);
  };

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {//запись нового значения, колбэком поднимаем значение вверх (к APP)
    setTitle(e.currentTarget.value);
  };

  return editMode ? (
    <div>
      <input value={title} onChange={onChangeTitle} />
      <button onClick={activatedViewMode}>Save</button>
    </div>
  ) : (
    <div onClick={activatedEditMode}>
      <span className={"title__task"}>{props.title}</span>
      <button>Edit</button>
    </div>
  );
}
