import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Import Components

import NavBar from './components/NavBar';
import LoginForm from './components/LoginForm';

// App Component

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <h1>Hello there!</h1>
        <Route path="/login" component={LoginForm}/>
      </div>
    </Router>
  );
}

export default App;