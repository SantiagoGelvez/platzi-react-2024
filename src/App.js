import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';
import React from 'react'

const defaultTodos = [
  {id: '07nv4-0nc72', task: 'Hacer el desayuno', completed: true},
  {id: 'vnv90-kc7x2', task: 'Tomar el curso de React', completed: false},
  {id: 'pabg7-x1z34', task: 'Bañar la moto', completed: true},
  {id: '178m6-ja810', task: 'Sacar la basura', completed: true},
  {id: '0wybu-iwdj4', task: 'Llamar a la cita de las gafas', completed: false},
  {id: 'bv8l4-9f27o', task: 'Comprar un perro', completed: true},
  {id: 'cn3n8-vl0r0', task: 'Grabar una canción', completed: false},
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={defaultTodos.filter(todo => todo.completed).length} total={defaultTodos.length} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.id} task={todo.task} completed={todo.completed}/>
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;