import React, { useCallback } from "react";
import TodoListItem from "./TodoListItem";
import { List } from "react-virtualized";

const TodoList = ({ todos, onRemove, onToggle }) => {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          onRemove={onRemove}
          onToggle={onToggle}
          key={key}
          style={style}
        ></TodoListItem>
      );
    },
    [onRemove, onToggle, todos]
  );
  return (
    <List
      className="todo-list"
      width={340}
      height={182245}
      rowCount={todos.length}
      rowHeight={72.898}
      rowRenderer={rowRenderer}
      list={todos}
      style={{ outline: "none" }}
    ></List>
  );
};

export default React.memo(TodoList);
