import React, { useState } from 'react';
import './App.css';

import TodoList from './TodoList';
import TodoForm from './TodoForm';

function App() {

const [todoList, setTodoList] = useState([]);

// adds new todo item into state
const addTodo = (todoTitle) => {

const newTodo = {
  id: Date.now(), // quick id solution for now
  title: todoTitle,
  isCompleted: false
};

// putting newest todos first
setTodoList((prevList) => {
  return [newTodo, ...prevList];
});

};

// marks todo as completed
const completeTodo = (id) => {

const updatedTodoList = todoList.map((todoItem) => {

  if (todoItem.id === id) {

    // keeping object spread because it's easier to read later
    return {
      ...todoItem,
      isCompleted: true
    };

  }

  return todoItem;
});

setTodoList(updatedTodoList);

// maybe later i'll move completed items into another section

};

return (
<div className="App">

  <h1>Todo List</h1>

  <TodoForm onAddTodo={addTodo} />

  <TodoList
    todoList={todoList}
    onCompleteTodo={completeTodo}
  />

</div>

);
}

export default App;