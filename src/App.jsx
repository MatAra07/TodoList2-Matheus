import React, { useState } from 'react';
import './App.css';

import TodoList from './TodoList';
import TodoForm from './TodoForm';

function App() {

// starting empty for now
const [todoList, setTodoList] = useState([]);

// handles adding a new todo into state
const addTodo = (todoTitle) => {

// using Date.now because it's quick and easy
// might swap this out later if duplicate ids ever become an issue
const newTodoItem = {
  id: Date.now(),
  title: todoTitle
};

// putting newest item at the top
setTodoList((oldList) => {

  const updatedList = [newTodoItem, ...oldList];

  return updatedList;
});

};

return (
<div className="App">

  <h1>Todo List</h1>

  {/* passing addTodo down so form can update state */}
  <TodoForm onAddTodo={addTodo} />

  <TodoList todoList={todoList} />

</div>

);
}

export default App;