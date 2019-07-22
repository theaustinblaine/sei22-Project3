import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import SingleBrand from './components/SingleBrand'
import Header from './components/Header.jsx'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/brands/:brandId" component={SingleBrand}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
