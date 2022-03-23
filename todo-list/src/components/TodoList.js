import Todo from "./Todo";

const TodoList = ({ todos, onComplete }) => {
  const onEdit = () => {
    console.log("editing");
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
              onEdit={onEdit}
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
