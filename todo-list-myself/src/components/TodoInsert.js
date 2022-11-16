import React, { useState } from "react";
import "./TodoInsert.scss";

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <form
      className="todo-insert"
      onSubmit={(e) => {
        e.preventDefault();
        onInsert(value);
        setValue("");
      }}
    >
      <input type="text" value={value} onChange={onChange}></input>
      <button>+</button>
    </form>
  );
};

export default TodoInsert;
