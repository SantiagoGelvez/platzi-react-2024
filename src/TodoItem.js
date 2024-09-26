function TodoItem({task, completed}) {
    return (
      <li>
        <p>{task} <span>{completed ? 'V' : 'X'}</span></p>
        
      </li>
    );
  }

export { TodoItem }