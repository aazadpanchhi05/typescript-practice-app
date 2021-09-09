import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import Setting from './Pages/Setting'
import Profile from './Pages/Profile'
import UserList from './Pages/UserList'
import Home from './Pages/Home'
import { Header } from './Components/Header'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/settings" component={Setting} />
        <Route path="/profile" component={Profile} />
        <Route path="/user-list" component={UserList} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  )
}

export default App
