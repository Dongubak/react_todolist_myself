import logo from "./logo.svg";
import "./App.css";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import { useCallback, useReducer, useRef, useState } from "react";

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }

  return array;
}

function todoReducer(todos, action) {
  switch (action.type) {
    case "INSERT":
      return [...todos, action.todo];
    case "REMOVE":
      return todos.filter((todo) => todo.id !== action.id);
    case "TOGGLE":
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
      );
    default:
      return todos;
  }
}

function App() {
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);
  const id = useRef(2501);
  const onInsert = useCallback((text) => {
    const todo = {
      id: id.current,
      text,
      checked: false,
    };
    const action = {
      type: "INSERT",
      todo,
    };
    dispatch(action);
    id.current += 1;
  }, []);
  const onRemove = useCallback((id) => {
    dispatch({
      type: "REMOVE",
      id,
    });
  }, []);
  const onToggle = useCallback((id) => {
    dispatch({
      type: "TOGGLE",
      id,
    });
  }, []);
  return (
    <div className="App">
      <TodoTemplate className="todo-template">
        <TodoInsert onInsert={onInsert}></TodoInsert>
        <TodoList
          todos={todos}
          onToggle={onToggle}
          onRemove={onRemove}
        ></TodoList>
      </TodoTemplate>
    </div>
  );
}

export default App;
