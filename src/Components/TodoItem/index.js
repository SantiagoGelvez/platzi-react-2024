import './TodoItem.css';
import { BsCircle, BsCheckCircle, BsX  } from "react-icons/bs";

function TodoItem({task, completed, onComplete, onDelete}) {
    return (
        <li className="listItem">
        <span className={`listItem-check`} onClick={onComplete}>
            {completed ? <BsCheckCircle className='listItem-check--done' /> : <BsCircle />}
        </span>

        <span className={`listItem-text ${completed && 'listItem--done'}`} onClick={onComplete}>
            {task}
        </span>
        
        <div className="listItem-button" onClick={onDelete}>
            <BsX />
        </div>
      </li>
    );
}

export { TodoItem }