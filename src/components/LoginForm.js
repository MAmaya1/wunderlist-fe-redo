import React, { useState } from 'react';
import axios from 'axios';

// Login Component

function LoginForm() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = (event, username, password) => {
        event.preventDefault();
        axios
            .post(
                'https://backend-wunderlist.herokuapp.com/api/auth/login',
                {username, password}
            )
            .then(res => {
                localStorage.setItem("token", res.data.token);
            })
            .catch(err => {
                console.log(err);
            })
        setUsername('');
        setPassword('');
    }

    return (
        <div>
            <h2>Log In</h2>
            <form>
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={event => setUsername(event.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="text"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                />
                <button onClick={event => login(event, username, password)}>Log In</button>
            </form>
        </div>
    )
}

export default LoginForm;