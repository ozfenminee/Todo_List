import React, { useState } from 'react';

export const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value.trim()) return; // Prevent adding empty todo
        addTodo(value);
        setValue("");
    };

    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input
                type="text"
                className='todo-input'
                value={value}
                placeholder='Bugünkü Yapılacaklar Nelerdir?'
                onChange={(e) => setValue(e.target.value)}
            />
            <button type='submit' className='todo-btn'>Add Task</button>
        </form>
    );
};
