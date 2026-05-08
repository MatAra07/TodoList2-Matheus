import React from 'react';

function TodoForm() {

// left this hardcoded for now until submit logic is added
const isDisabled = true;

return (
<form>
<label htmlFor="todoTitle">
Todo:
</label>

  <input
    type="text"
    id="todoTitle"
    placeholder="add something..."
  />

  {/* button disabled until i wire up state */}
  <button type="submit" disabled={isDisabled}>
    Add Todo
  </button>

  {/* maybe add validation later */}
  {/* <p>Please enter a value</p> */}
</form>

);
}

export default TodoForm;