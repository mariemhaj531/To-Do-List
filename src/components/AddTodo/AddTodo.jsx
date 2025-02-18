import React, { useState } from 'react'
import './AddTodo.css'
const AddTodo = ({ addTodo }) => {
  const [title ,setTitle] = useState("");
  const emoji = "😊";
  const emojii = "✍️"
  const handleSubmit = (e) => {
      e.preventDefault();
      if (title.trim()) {
          addTodo(title);
          setTitle("");
      }
  };
  return (
  <form className='add-todo-form' onSubmit={handleSubmit}>
   <input 
   type="text" className='add-todo-input' value={title}
   onChange={(e) => setTitle(e.target.value)}
   placeholder={`Add a new todo ${emoji}`}
   />
   <button type='submit' className='add-todo-button'>
       Add {emojii}
       </button>
  </form>
  );
};

export default AddTodo