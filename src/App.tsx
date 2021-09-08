import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/' component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
