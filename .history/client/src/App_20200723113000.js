import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import CV from './components/CV';
import Contact from './components/Contact';
import Signin from './components/Signin';
import AdminRoute from "./AdminRoute";
import MentionsLegales from './components/MentionsLegales';

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Home} />     
      <Route exact path="/CV" component={CV} />     
      <Route exact path="/contact" component={Contact} />     
      <Route exact path="/signin" component={Signin} /> 
      <Route exact path="/mentions-legales" component={MentionsLegales} /> 
      <AdminRoute/>    
    </Switch>
    </Router>
  );
}

export default App;