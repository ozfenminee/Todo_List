import React, { useState } from 'react';
import { TodoForm } from './ToDoForm';
import { v4 as uuidv4 } from 'uuid';
import { ToDo } from './ToDo';
import { EditToDoForm } from './EditToDoForm'; 

export const ToDoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState({}); 

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false }
    ]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
  
    setIsEditing({ ...isEditing, [id]: !isEditing[id] });
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, task, isEditing: !todo.isEditing }
          : todo
      )
    );
   
    setIsEditing({ ...isEditing, [id]: !isEditing[id] });
  };

  return (
    <div className='TodoWrapper'>
      <h1>Yapmayı Düşündüklerin!</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) =>
        isEditing[todo.id] ? (
          <EditToDoForm editTodo={editTask} task={todo} key={todo.id} /> 
        ) : (
          <ToDo
            task={todo}
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo} 
          />
        )
      )}
    </div>
  );
};
