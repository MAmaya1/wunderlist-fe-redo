import React, { useState, useEffect } from 'react';

// Import axiosWithAuth

import axiosWithAuth from '../utils/axiosWithAuth';

// Import Components

import TaskList from '../components/TaskList';
import AddTodoForm from '../components/AddTodoForm';
import EditTodoForm from '../components/EditTodoForm';

// Landing View

const LandingView = () => {

    const [todos, setTodos] = useState([]);
    const [loadingErr, setError] = useState(null);
    const [addFormOpen, setAddFormOpen] = useState(false);
    const [editFormOpen, setEditFormOpen] = useState(false);
    const [taskID, setTaskID] = useState('');

// Opens "Add Task" form

    const openAddForm = event => {
        event.preventDefault();
        setAddFormOpen(true);
    }

// Opens "Edit Task" form

    const openEditForm = (taskID) => {
        setEditFormOpen(true);
        setTaskID(taskID);
    }

// Closes forms on submission or X click

    const closeForm = () => {
        setAddFormOpen(false);
        setEditFormOpen(false);
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
                <TaskList 
                    todos={todos}
                    openEditForm={openEditForm}
                />
            )}

        {/* Pop Up "Add Task" Form */}

            {addFormOpen && (
                <AddTodoForm 
                    closeForm={closeForm}
                />
            )}
            <button onClick={event => openAddForm(event)}>+</button>

         {/* Pop Up "Edit Task" Form */}

            {editFormOpen && (
                <EditTodoForm
                    closeForm={closeForm}
                    taskID={taskID}
                />
            )}
        </div>
    )
}

export default LandingView;