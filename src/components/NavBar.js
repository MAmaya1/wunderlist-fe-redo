import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// Styled Components

const NavigationBar = styled.nav`
    background: lightblue;
    height: 60px;
`

// NavBar Component

const NavBar = props => {
    return (
        <NavigationBar>
            <NavLink to="/login">Log In</NavLink>
        </NavigationBar>
    )
}

export default NavBar;