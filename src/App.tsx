import React from 'react'
import 'App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from 'react-router-dom'
import { Header } from 'Components/Header'
import { Sidebar } from 'Components/Sidebar/Sidebar'
import { routes } from 'routes'

function App() {
  const Main = withRouter(({ location }) => {
    return (
      <>
        <Switch>
          {location.pathname !== '/login' &&
            location.pathname !== '/signup' &&
            location.pathname !== '/calendar' && (
              <>
                <Header />
                <Sidebar />
              </>
            )}
          {routes.map((item) => (
            <Route
              path={item.path}
              exact={item.exact}
              component={item.component}
            />
          ))}
        </Switch>
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
