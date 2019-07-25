import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import Home from './components/Home.jsx'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
          <Home /> 
      </Router>
    </div>
  );
}

export default App;
