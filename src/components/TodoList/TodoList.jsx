import React from 'react'
import './TodoList.css'
import TodoItem from '../TodoItem/TodoItem'
const TodoList = ({todos, toggleComplete, deleteTodo}) => {
  return (
    <ul className='todo-list'>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList