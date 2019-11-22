import React, { useState } from 'react';

// import axiosWithAuth

import axiosWithAuth from '../utils/axiosWithAuth';

// Todo Component

const Todo = props => {

    const [isChecked, setChecked] = useState(false);

// Checks off task as complete

    const completeTask = () => {
        isChecked ? setChecked(false) : setChecked(true);
    }

// Deletes Task

    const deleteTask = () => {
        const id = props.id;

        axiosWithAuth()
            .delete(`https://backend-wunderlist.herokuapp.com/api/todos/${id}`)
            .then(res => {

            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <button onClick={() => completeTask()}>O</button>
            <p>{props.item}</p>
            <p>{props.description}</p>
            <p>{(new Date(props.due_date)).toLocaleDateString()}</p>
            <button onClick={() => props.openEditForm(props.id)}>Edit</button>
            {isChecked && <button onClick={() => deleteTask(props.id)}>Delete</button>}
        </div>
    )
}

export default Todo;