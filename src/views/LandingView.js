import React, { useState, useEffect } from 'react';

// Import axiosWithAuth

import axiosWithAuth from '../utils/axiosWithAuth';

// Import Components

import TaskList from '../components/TaskList';
import AddTodoForm from '../components/AddTodoForm';

// Landing View

const LandingView = () => {

    const [todos, setTodos] = useState([]);
    const [loadingErr, setError] = useState(null);
    const [addFormOpen, setFormOpen] = useState(false);

// Opens "Add Task" form

    const openAddForm = event => {
        event.preventDefault();
        setFormOpen(true);
    }

// Closes "Add Task" form on submission or X click

    const closeAddForm = () => {
        setFormOpen(false);
    }

// Grabs data on component render

    useEffect(() => {
        axiosWithAuth()
            .get('https://backend-wunderlist.herokuapp.com/api/todos')
            .then(res => {
                setTodos(res.data);
            })
            .catch(err => {
                setError(err);
            })
    })

    return (
        <div>
            <h2>Your Tasks</h2>
            {loadingErr ? (
                <p>There was an error loading your tasks!</p>
            ) : (
                <TaskList todos={todos}/>
            )}

        {/* Pop Up "Add Task" Form */}

            {addFormOpen && (
                <AddTodoForm 
                    closeAddForm={closeAddForm}
                />
            )}
            <button onClick={event => openAddForm(event)}>+</button>
        </div>
    )
}

export default LandingView;