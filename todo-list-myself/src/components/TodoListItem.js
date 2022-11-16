import React from "react";
import "./TodoListItem.scss";
import cn, { css } from "classnames";

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { text, id, checked } = todo;
  return (
    <div className={cn("todo-item", { checked })}>
      {checked ? (
        <button
          onClick={() => {
            onToggle(id);
          }}
        >
          uc
        </button>
      ) : (
        <button
          onClick={() => {
            onToggle(id);
          }}
        >
          c
        </button>
      )}
      <p>{text}</p>
      <button
        onClick={() => {
          onRemove(id);
        }}
      >
        -
      </button>
    </div>
  );
};

export default TodoListItem;
