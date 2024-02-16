import React from 'react';
import { faPenSquare, faTrash } from '@fortawesome/free-solid-svg-icons'; // İkonları doğru bir şekilde al
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ToDo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className='Todo'>
      <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' : ''}`}>{task.task}</p>
      <div>
        <FontAwesomeIcon icon={faPenSquare} onClick={() => editTodo(task.id)} /> {/* Düzenleme işlevini çağırmak için düzeltin */}
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
};
