import logo from "./logo.svg";
import "./App.css";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import { useRef, useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "할일을 입력하시오", checked: false },
  ]);
  const id = useRef(2);
  const onInsert = (text) => {
    const todo = {
      id: id.current,
      text,
      checked: false,
    };
    const nextTodos = [...todos, todo];
    setTodos(nextTodos);
    id.current += 1;
  };
  const onRemove = (id) => {
    const nextTodos = todos.filter((todo) => todo.id !== id);
    setTodos(nextTodos);
  };
  const onToggle = (id) => {
    const nextTodos = todos.map((todo) => {
      if (todo.id == id) {
        todo.checked = !todo.checked;
      }
      return todo;
    });
    setTodos(nextTodos);
  };
  return (
    <div className="App">
      <TodoTemplate>
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
