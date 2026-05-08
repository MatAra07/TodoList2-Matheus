import React from 'react';
import TodoListItem from './TodoListItem';

function TodoList({ todoList }) {

// extra check just in case
if (!todoList || todoList.length === 0) {
return <p>No todos yet.</p>;
}

return (
<ul>

  {todoList.map((todo) => {

    return (
      <TodoListItem
        key={todo.id}
        todo={todo}
      />
    );
  })}

</ul>

);
}

export default TodoList;

TodoListItem.js

import React from 'react';

function TodoListItem(props) {

const todo = props.todo;

return (
<li>
{todo.title}
</li>
);
}

export default TodoListItem;