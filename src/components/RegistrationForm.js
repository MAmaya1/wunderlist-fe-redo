import React, { useState } from 'react';
import axios from 'axios';

// Registration Form Component

function RegistrationForm() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const signUp = (event, username, password) => {
        const newUser = {username, password};

        event.preventDefault();
        axios
            .post(
                'https://backend-wunderlist.herokuapp.com/api/auth/register',
                newUser
            )
            .then(res => {
                localStorage.setItem("token", res.data.token);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <h2>Sign Up</h2>
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
                <button onClick={event => signUp(event, username, password)}>Log In</button>
            </form>
        </div>
    )
}

export default RegistrationForm;