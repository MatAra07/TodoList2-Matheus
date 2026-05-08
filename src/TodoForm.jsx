import React, { useRef } from 'react';
function TodoForm(props) {
const inputRef = useRef();
const handleAddTodo = (event) => {
// don't want form refreshevent.preventDefault();//
return (
<form onSubmit={handleAddTodo}>
  <label htmlFor="todoTitle">    
    Todo:  </label>  <input    ref={inputRef}    type="text"    id="todoTitle"    name="todoTitle"    placeholder="Todo text"    required  />  <button type="submit">    Add Todo  </button> ''
     {/* testing area */}  {/* <small>Press enter to add</small> */}</form>
);
}
export default TodoForm;