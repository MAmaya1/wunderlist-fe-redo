import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// Styled Components

const NavigationBar = styled.nav`
    background: lightblue;
    height: 60px;
`

// NavBar Component

function NavBar() {
    return (
        <NavigationBar>
            <NavLink to="/login">Log In</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
            <NavLink to="/private">Home</NavLink>
        </NavigationBar>
    )
}

export default NavBar;