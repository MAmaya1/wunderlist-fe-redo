import React, { useState, useEffect } from 'react';

// Import axiosWithAuth

import axiosWithAuth from '../utils/axiosWithAuth';

// Import Components

import TaskList from '../components/TaskList';

// Landing View

const LandingView = () => {

    const [todos, setTodos] = useState([]);
    const [loadingErr, setError] = useState(null);

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
        </div>
    )
}

export default LandingView;