import { TodoCounter } from './Components/TodoCounter';
import { TodoSearch } from './Components/TodoSearch';
import { TodoList } from './Components/TodoList';
import { TodoItem } from './Components/TodoItem';
import { CreateTodoButton } from './Components/CreateTodoButton';
import { LoadingTodos } from './Components/LoadingTodos';
import { ErrorTodos } from './Components/ErrorTodos';

export function AppUI({searchValue, setsearchValue, totalTodos, completedTodos, searchedTodos, completeTodo, deleteTodo, loading, error}) {
    return (
    <>
    <TodoCounter completed={completedTodos} total={totalTodos} loading={loading} />
    
    <TodoSearch searchValue={searchValue} setsearchValue={setsearchValue} />
    
    {
        <TodoList>
            {loading && (
                <>
                    <LoadingTodos/>
                    <LoadingTodos/>
                </>
            )}
            
            {/* {<LoadingTodos/>} */}

            {error && <ErrorTodos/>}

            {!loading && !searchedTodos.length && <h2 style={{textAlign: 'center'}}>¡Agrega una nueva tarea 🤓!</h2>}

            {searchedTodos.map(todo => (
                <TodoItem key={todo.id} task={todo.task} completed={todo.completed} onComplete={() => completeTodo(todo.id)} onDelete={() => deleteTodo(todo.id)} />
            ))}
        </TodoList>
    }
    
    <CreateTodoButton />
    </>

    )
}
