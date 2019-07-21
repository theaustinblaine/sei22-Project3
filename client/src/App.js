import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Brands from './components/Brands.jsx'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Brands}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
