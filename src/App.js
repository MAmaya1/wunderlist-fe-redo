import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Import Components

import NavBar from './components/NavBar';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import PrivateRoute from './components/PrivateRoute';
import LandingView from './views/LandingView';
import AddTodoForm from './components/AddTodoForm';

// App Component

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route path="/login" component={LoginForm}/>
        <Route path="/signup" component={RegistrationForm}/>
        <PrivateRoute path="/private" component={LandingView}/>
        <Route path="/add-todo" component={AddTodoForm}/>
      </div>
    </Router>
  );
}

export default App;