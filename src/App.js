import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Import Components

import NavBar from './components/NavBar';

// App Component

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <h1>Hello there!</h1>
      </div>
    </Router>
  );
}

export default App;