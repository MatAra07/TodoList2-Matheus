import React from 'react';
import TodoListItem from './TodoListItem';

function TodoList({ todoList, onCompleteTodo }) {

// hiding completed todos from main list
const filteredTodoList = todoList.filter((todo) => {
return !todo.isCompleted;
});

return (
<div>

  {filteredTodoList.length === 0 ? (

    <p>
      Add todo above to get started
    </p>

  ) : (

    <ul>

      {filteredTodoList.map((todo) => {

        return (
          <TodoListItem
            key={todo.id}
            todo={todo}
            onCompleteTodo={onCompleteTodo}
          />
        );

      })}

    </ul>

  )}

</div>

);
}

export default TodoList;