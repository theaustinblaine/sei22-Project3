import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import SingleBrand from './components/SingleBrand'
import Header from './components/Header.jsx'
import './App.css';
import SingleModel from './components/SingleModel.jsx';
import ModelsList from './components/ModelsList.jsx'

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Switch>
          <Route path="/brands/:brandId/models/:modelId" component={SingleModel} />
          <Route path="/brands/:brandId/models" component={ModelsList} />
          <Route path="/brands/:brandId" component={SingleBrand} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
