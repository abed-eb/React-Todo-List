import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (input) => {
    const newTodo = {
      id: Math.random() * 1000,
      text: input,
      isCompleted: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };
  //very important for the lists
  const onCompleteTodo = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    //cloning todos[index]
    const selectedTodo = { ...todos[index] };
    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    //clone : todos
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
    //other way of deleting
    // const index = todos.findIndex((todo) => todo.id === id);
    // const updatedTodos = [...todos];
    // updatedTodos.splice(index, 1);
  };

  const updateTodo = (id, newValue) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.text = newValue;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      <TodoForm submitTodo={addTodo} />
      <TodoList
        onUpdate={updateTodo}
        onDelete={removeTodo}
        onComplete={onCompleteTodo}
        todos={todos}
      />
    </div>
  );
};

export default TodoApp;
