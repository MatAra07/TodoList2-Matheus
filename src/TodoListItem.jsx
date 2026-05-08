TodoListItem.js
import React from 'react';
function TodoListItem(props) {
// using props directly here instead of destructuring
// feels easier to debug sometimes honestly
const currentTodo = props.todo;
return (
<li className="todo-item">
{currentTodo.title}
  {/* maybe add edit/delete buttons here later */}  {/* <button>Edit</button> */}</li>
);
}
export default TodoListItem;