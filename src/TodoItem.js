function TodoItem(props) {
    return (
      <li>
        <span>V</span>
        <p>{props.task}</p>
        <span>X</span>
      </li>
    );
  }

export { TodoItem }