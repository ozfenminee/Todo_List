import React, { useState } from 'react';

export const EditToDoForm = ({ editTodo, task }) => { // prop ismi düzeltildi (EditToDo -> editTodo)
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault();
        editTodo(value, task.id); // prop ismi düzeltildi (EditToDo -> editTodo)
        setValue("");
    };

    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input
                type="text"
                className='todo-input'
                value={value}
                placeholder='Güncelle'
                onChange={(e) => setValue(e.target.value)}
            />
            <button type='submit' className='todo-btn'>Düzenle</button>
        </form>
    );
};
