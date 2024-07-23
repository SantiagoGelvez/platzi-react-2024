function TodoCounter(props) {
    return (
      <h1>
        Has completado {props.completed} de {props.all} TODOS
      </h1>
    );
  }

export { TodoCounter }