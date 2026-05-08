import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

// just keeping these here for now instead of fetching from somewhere
const starterTodos = [
{ id: 1, title: 'review resources' },
{ id: 2, title: 'take notes' },
{ id: 3, title: 'code out app' }
];

function App() {

// probably gonna move this into context later maybe
const [todoItems, setTodoItems] = useState(starterTodos);

return (
<div className="App">
<h1>Todo List</h1>

  {/* form section */}
  <TodoForm />

  <TodoList todoList={todoItems} />
</div>

);
}

export default App;