import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import CV from './components/CV';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Home} />     
      <Route exact path="/CV" component={CV} />     
      <Route exact path="/contact" component={Contact} />     
    </Switch>
    </Router>
  );
}

export default App;
