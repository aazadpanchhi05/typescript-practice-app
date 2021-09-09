import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from 'react-router-dom'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import Setting from './Pages/Setting'
import Profile from './Pages/Profile'
import UserList from './Pages/UserList'
import Home from './Pages/Home'
import { Header } from './Components/Header'

function App() {
  const Main = withRouter(({ location }) => {
    return (
      <>
        {location.pathname !== '/login' && location.pathname !== '/signup' && (
          <Header />
        )}
        <main>
          <Switch>
            <Route path="/settings" component={Setting} />
            <Route path="/profile" component={Profile} />
            <Route path="/user-list" component={UserList} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/" component={Home} exact />
          </Switch>
        </main>
      </>
    )
  })

  return (
    <Router>
      <Main />
    </Router>
  )
}

export default App
