import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoCounter completed={5} all={10} />
      <TodoSearch />

      <TodoList>
        <TodoItem task={'Hacer el desayuno'} />
        <TodoItem task={'Comprar los muebles'} />
        <TodoItem task={'Ir a piscina'} />
        <TodoItem task={'Terminar el curso de React'} />
      </TodoList>

      <CreateTodoButton />
    </div>
  );
}

export default App;
