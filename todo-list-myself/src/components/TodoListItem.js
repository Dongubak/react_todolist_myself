import React from "react";
import "./TodoListItem.scss";
import cn, { css } from "classnames";
import { MdDone, MdDelete, MdRemoveDone } from "react-icons/md";

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
          <MdRemoveDone></MdRemoveDone>
        </button>
      ) : (
        <button
          onClick={() => {
            onToggle(id);
          }}
        >
          <MdDone></MdDone>
        </button>
      )}
      <p>{text}</p>
      <button
        onClick={() => {
          onRemove(id);
        }}
      >
        <MdDelete></MdDelete>
      </button>
    </div>
  );
};

export default React.memo(TodoListItem);
