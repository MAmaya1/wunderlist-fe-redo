import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Import Components

import NavBar from './components/NavBar';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import PrivateRoute from './components/PrivateRoute';
import TestLanding from './components/TestLanding';

// App Component

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <h1>Hello there!</h1>
        <Route path="/login" component={LoginForm}/>
        <Route path="/signup" component={RegistrationForm}/>
        <PrivateRoute path="/private" component={TestLanding}/>
      </div>
    </Router>
  );
}

export default App;