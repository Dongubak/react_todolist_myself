import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        ></TodoListItem>
      ))}
    </div>
  );
};

export default TodoList;
