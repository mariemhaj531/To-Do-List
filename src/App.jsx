import React, { useState } from 'react'
import Header from './components/Header/Header'
import TodoList from './components/TodoList/TodoList'
import AddTodo from './components/AddTodo/AddTodo'
import './styles/styles.css'
// import './index.css'
const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    const newTodo = { id: Date.now(), title, completed: false };
    setTodos([...todos, newTodo]);
  };
  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  return (
    <div className='app'>
      <Header />
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App