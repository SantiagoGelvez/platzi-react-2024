import './TodoList.css'

function TodoList({children}) {
    return (
        <div className='ul-container'>
            <ul>
                {children}
            </ul>
        </div>
    )
}

export { TodoList }