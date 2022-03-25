import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = ({ todos, onComplete, onDelete, onUpdate }) => {
  const [edit, setEdit] = useState({ id: null, text: "", isCompleted: false });
  const editTodo = (newInput) => {
    onUpdate(edit.id, newInput);
    setEdit({ id: null, text: "", isCompleted: false });
  };
  const renderTodos = () => {
    if (todos.length === 0) return <p>Add some todos</p>;
    return (
      <div>
        {todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              onEdit={() => setEdit(todo)}
              edit={edit}
              submitTodo={editTodo}
              onDelete={() => onDelete(todo.id)}
              onComplete={() => onComplete(todo.id)}
            />
          );
        })}
      </div>
    );
  };
  return <div>{renderTodos()}</div>;
};

export default TodoList;
