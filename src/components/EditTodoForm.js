import React, { useState } from 'react';

// Import axiosWithAuth

import axiosWithAuth from '../utils/axiosWithAuth';

const EditTodoForm = props => {

    const [itemName, setItemName] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [updateError, setError] = useState(null);

    const updateTodo = (event, item, description, due_date, taskID) => {
        const updatedTask = {item, description, due_date};
        const id = taskID;

        console.log(taskID)

        event.preventDefault();
        axiosWithAuth()
            .put(`https://backend-wunderlist.herokuapp.com/api/todos/${id}`, updatedTask)
            .then(res => {
                res && props.closeForm();
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
            <h2>Edit Task</h2>
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
                <button onClick={event => updateTodo(event, itemName, description, dueDate, props.taskID)}>Update</button>
                <button onClick={() => props.closeForm()}>X</button>
            </form>
            {updateError && (<p>Error updating task!</p>)}
        </div>
    )
}

export default EditTodoForm;