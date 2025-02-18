import React, { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import TodoList from './components/TodoList/TodoList'
import AddTodo from './components/AddTodo/AddTodo'
import './styles/styles.css'
// import './index.css'
const App = () => {
  const [todos, setTodos] = useState([]);
  const [editing, setEditing] = useState(null);
  // LOAD  TODOS FROM LOCALSTORAGE
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      try {
      setTodos(JSON.parse(storedTodos));
    } catch (error) {
      console.error("Error parsing JSON from localStorage", error);
      setTodos([]);
    }
    }
  }, []);
  //Save todos to localstorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  const addTodo = (title) => {
    const newTodo = { id: Date.now(), title, completed: false };
    //console.log("Nouvelle liste des tâches :", todos);
    setTodos([...todos, newTodo]);
   
  };
  useEffect(() => {
    console.log("Mise à jour des tâches :", todos);
}, [todos]);
  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  const editTodo = (id, newTitle) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title: newTitle } : todo
      )
    );
    setEditing(null);
  };
  return (
    <div className='app'>
      <Header />
      <AddTodo addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        setEditing={setEditing}
        editing={editing}
      />
    </div>
  );
};

export default App