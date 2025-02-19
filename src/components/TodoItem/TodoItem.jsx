import React, { useState, useEffect } from 'react'; 
import './TodoItem.css'


const TodoItem = ({ todo, toggleComplete, editTodo, deleteTodo }) => {
    const [editing, setEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(todo.title);

    useEffect(() => {
        console.log("Valeur de editing modifiée:", editing);
    }, [editing]);

     const handleEdit = () => {
        if (newTitle.trim()) {
            editTodo(todo.id, newTitle);
            setEditing(false);
        }
    };
       console.log("Rendering TodoItem:", todo.title, "Editing:", editing);  
 return (
        <li className='todo-item'>
            {editing ? (
                <>
                    <input
                        type="text"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleEdit()}
                        autoFocus
                    />
                    <button onClick={handleEdit} className="save-button">💾 Save</button>
                    <button onClick={() => setEditing(false)}>❌ Cancel</button>
                </>
            ) : (
                <>
            <span className={todo.completed ? 'completed' : ''}
                onClick={() => toggleComplete(todo.id)}
            >
                {todo.title}
            </span>
            <button 
            onClick={() => {
            console.log("Bouton Edit cliqué !");
            setEditing(true);
    }} 
    className="edit-button">🖉 Edit</button>
            <button onClick={() => deleteTodo(todo.id)}>🗑 Delete</button>
            </>
             )}
        </li>
    );
}

export default TodoItem