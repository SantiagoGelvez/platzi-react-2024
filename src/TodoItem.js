import './TodoItem.css';

function TodoItem({task, completed}) {
    return (
      <li className="listItem">
        <span className={`listItem-check ${completed && 'listItem-check--done'}`}>{completed ? 'V' : 'O'}</span> 

        <label className={`${completed && 'listItem--done'}`}>{task}</label>
        
        <button className="listItem-button">X</button>
      </li>
    );
  }

export { TodoItem }