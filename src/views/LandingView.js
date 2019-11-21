import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Import Components

import TaskList from '../components/TaskList';

// Landing View

const LandingView = () => {

    const [todos, setTodos] = useState([]);
    const [loadingErr, setError] = useState(null);

    useEffect(() => {
        axios
            .get('https://backend-wunderlist.herokuapp.com/api/todos')
            .then(res => {
                setTodos(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    })

    return (
        <div>
            <h2>Your Tasks</h2>
            {loadingErr ? (
                <p>There was an error loading your tasks!</p>
            ) : (
                <TaskList />
            )}
        </div>
    )
}

export default LandingView;