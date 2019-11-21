import React, { useState } from 'react';

// Import axiosWithAuth

import axiosWithAuth from '../utils/axiosWithAuth';

// Add Todo Form

const AddTodoForm = props => {

    const [itemName, setItemName] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [addError, setError] = useState(null);

    const addTodo = (event, item, description, due_date) => {
        const newTask = {item, description, due_date};

        event.preventDefault();
        axiosWithAuth()
            .post('https://backend-wunderlist.herokuapp.com/api/todos', newTask)
            .then(res => {

            })
            .catch(err => {
                setError(err)
            })
        setItemName('');
        setDescription('');
        setDueDate('')
    }

    return (
        <div>
            <h2>Add a New Task</h2>
            <form>
                <label htmlFor="item-name">Task</label>
                <input
                    id="item-name"
                    type="text"
                    value={itemName}
                    onChange={event => setItemName(event.target.value)}
                />
                <label htmlFor="description">Description</label>
                <input
                    id="description"
                    type="text"
                    value={description}
                    onChange={event => setDescription(event.target.value)}
                />
                <label htmlFor="due-date">Due Date</label>
                <input
                    id="due-date"
                    type="date"
                    value={dueDate}
                    onChange={event => setDueDate(event.target.value)}
                />
                <button onClick={event => addTodo(event, itemName, description, dueDate)}>Add To List</button>
            </form>
            {addError && (<p>Error adding task!</p>)}
        </div>
    )
}

export default AddTodoForm;