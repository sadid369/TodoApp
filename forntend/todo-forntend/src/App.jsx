import "./App.css";
import CreateTodo from "./components/CreateTodo";
import Todos from "./components/Todos";
import { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:7000/todos").then(
      (response) => {
        response.json().then((data) => {
          // console.log(data);
          setTodos(data);
        });
      },
      [todos]
    );
  });
  return (
    <>
      <CreateTodo />
      <Todos todos={todos} />
    </>
  );
}

export default App;
