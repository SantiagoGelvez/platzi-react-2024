import './TodoItem.css';

function TodoItem({task, completed, onComplete, onDelete}) {
    return (
      <li className="listItem">
        <span className={`listItem-check ${completed && 'listItem-check--done'}`} onClick={onComplete}>
          {completed ? 'V' : 'O'}
        </span> 

        <label className={`${completed && 'listItem--done'}`}>{task}</label>
        
        <button className="listItem-button" onClick={onDelete}>X</button>
      </li>
    );
  }

export { TodoItem }