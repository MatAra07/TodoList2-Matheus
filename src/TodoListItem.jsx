mport React from 'react';

function TodoListItem(props) {

const { todo, onCompleteTodo } = props;

return (
<li className="todo-list-item">

  <input
    type="checkbox"
    checked={todo.isCompleted}
    onChange={() => {
      onCompleteTodo(todo.id);
    }}
  />

  <span>
    {todo.title}
  </span>

  {/* maybe add delete button later */}
  {/* <button>Delete</button> */}

</li>

);
}