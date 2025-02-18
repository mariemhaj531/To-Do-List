import React from 'react'
import './TodoItem.css'
const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
    return (
        <li className='todo-item'>
            <span className={todo.completed ? 'completed' : ''}
                onClick={() => toggleComplete(todo.id)}
            >
                {todo.title}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>🗑 Delete</button>
        </li>
    );
}

export default TodoItem