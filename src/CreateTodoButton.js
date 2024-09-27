import './CreateTodoButton.css'

function CreateTodoButton() {
    const CreateTodoButton = (event) => {
        console.log("🚀 ~ CreateTodoButton ~ event.target:", event.target)
        console.log("🚀 ~ CreateTodoButton ~ event:", event)
        console.log('le diste click al boton para crear TODOs')
    }

    return (
        <button className="ButtonCreate" onClick={CreateTodoButton}>Crear TODO</button>
    )
}

export { CreateTodoButton }