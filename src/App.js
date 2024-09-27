import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

// const statuses = [
//   {code: 'todo', name: 'Por hacer'},
//   {code: 'in-progress', name: 'En progreso'},
//   {code: 'done', name: 'Hecho'},
// ]

// const tasks = [
//   {id: '07nv4-0nc72', description: 'Hacer el desayuno', status_code: 'done'},
//   {id: 'vnv90-kc7x2', description: 'Tomar el curso de React', status_code: 'in-progress'},
//   {id: 'pabg7-x1z34', description: 'Bañar la moto', status_code: 'done'},
//   {id: '178m6-ja810', description: 'Sacar la basura', status_code: 'done'},
//   {id: '0wybu-iwdj4', description: 'Llamar a la cita de las gafas', status_code: 'in-progress'},
//   {id: 'bv8l4-9f27o', description: 'Comprar un perro', status_code: 'done'},
//   {id: 'cn3n8-vl0r0', description: 'Grabar una canción', status_code: 'in-progress'},
//   {id: 'a1b2c-3d4e5', description: 'Leer un libro', status_code: 'todo'},
//   {id: 'f6g7h-8i9j0', description: 'Ir al gimnasio', status_code: 'in-progress'},
//   {id: 'k1l2m-3n4o5', description: 'Comprar víveres', status_code: 'done'},
//   {id: 'p6q7r-8s9t0', description: 'Llamar a mamá', status_code: 'todo'},
//   {id: 'u1v2w-3x4y5', description: 'Escribir un blog', status_code: 'in-progress'}
// ]

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
  const [todos, setTodos] = React.useState(defaultTodos)
  const [searchValue, setsearchValue] = React.useState('')

  const nomalizedSearchValue = (text) => text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim()

  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length
  const searchedTodos = todos.filter(todo => nomalizedSearchValue(todo.task).includes(nomalizedSearchValue(searchValue)))

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      
      <TodoSearch searchValue={searchValue} setsearchValue={setsearchValue} />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem key={todo.id} task={todo.task} completed={todo.completed}/>
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;