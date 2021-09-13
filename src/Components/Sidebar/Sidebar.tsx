import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import { routes } from '../../routes'
import { SidebarData } from './SidebarData'

export const Sidebar = () => {
  const classes = {
    sidebar: 'bg-white flex-shrink-0 min-h-screen w-64 border-r-2',
    nav: 'flex flex-row space-x-5  p-3 text-black hover:bg-indigo-400 hover:text-white',
    navActive: 'flex text-white bg-indigo-500',
  }

  return (
    <div className="flex">
      <div className={classes.sidebar}>
        {SidebarData.map((item) => (
          <NavLink
            className={classes.nav}
            to={item.path}
            activeClassName={classes.navActive}
            exact
          >
            <i className="mt-1">{item.icon}</i>
            <div>{item.title}</div>
          </NavLink>
        ))}
      </div>
      <div>
        {routes.map((item) => (
          <Route
            exact={item.exact}
            component={item.component}
            path={item.path}
          />
        ))}
      </div>
    </div>
  )
}
