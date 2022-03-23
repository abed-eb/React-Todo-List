import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const addTodoHandler = (input) => {
    const newTodo = {
      id: Math.random() * 1000,
      text: input,
      isCompleted: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };
  const onCompleteTodo = (id) => {
    console.log(id);
  };

  return (
    <div className="container">
      <TodoForm addTodoHandler={addTodoHandler} />
      <TodoList onComplete={onCompleteTodo} todos={todos} />
    </div>
  );
};

export default TodoApp;
