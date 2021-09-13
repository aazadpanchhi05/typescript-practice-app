import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import { routes } from '../../routes'
import { SidebarData } from './SidebarData'

interface Props {
  child?: React.ReactElement
}

export const Sidebar: React.FC<Props> = ({ child }: Props) => {
  return (
    <div className="flex">
      <div className="bg-white flex-shrink-0 min-h-screen w-64 border-r-2">
        {SidebarData.map((item) => (
          <NavLink
            className="flex flex-row space-x-5  p-3 text-black hover:bg-indigo-400 hover:text-white"
            to={item.path}
            activeClassName="flex text-white bg-indigo-500"
            exact
          >
            <i className="mt-1">{item.icon}</i>
            <div className="">{item.title}</div>
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
