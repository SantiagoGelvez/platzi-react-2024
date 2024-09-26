import './TodoList.css'

function TodoList({children}) {
    return (
        <div class='ul-container'>
            <ul>
                {children}
            </ul>
        </div>
    )
}

export { TodoList }