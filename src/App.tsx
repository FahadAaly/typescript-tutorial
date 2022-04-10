import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./model";
import TodoList from "./components/TodoList";

// let name: string;
// let age: number | string; // union
// let isStudent: boolean;
// let hobbies: string[];
// let role: [number, string]; // tupil

// let printName: (name: string) => void;

// type Person = {
//   name: string;
//   age: number;
// };

// let person: Person = {
//   name: "Fahad",
//   age: 25,
// };

// let lotsOfPeople: Person[];

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <div className="App">
      <h1 className="heading">Taskify</h1>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
