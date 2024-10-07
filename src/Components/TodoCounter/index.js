import './todoCounter.css'

function TodoCounter({completed, total}) {
    return (
      <h1>
        {
        total === 0
        ? '🥱 No tienes tareas pendientes'
        : completed === total
          ? '🥳 Completaste todas tus tareas 🎉'
          : `Has completado ${completed} de ${total} tareas`}
      </h1>
    );
  }

export { TodoCounter }