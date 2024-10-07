import React from 'react';

import { AppUI } from './AppUI';
import { useLocalStorage } from './hooks/useLocalStorage';


function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', [])
  const [searchValue, setsearchValue] = React.useState('')

  const nomalizedSearchValue = (text) => text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim()

  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length
  const searchedTodos = todos.filter(todo => nomalizedSearchValue(todo.task).includes(nomalizedSearchValue(searchValue)))

  const completeTodo = (id) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(todo => todo.id === id)
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed
    saveTodos(newTodos)
  }

  const deleteTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    saveTodos(newTodos)
  }

  return (
    <AppUI 
    completedTodos = {completedTodos}
    searchedTodos = {searchedTodos}
    searchValue = {searchValue}
    totalTodos = {totalTodos}
    loading={loading}
    error={error}
    setsearchValue = {setsearchValue}
    completeTodo = {completeTodo}
    deleteTodo = {deleteTodo}
    />
  );
}

export default App;