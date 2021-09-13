import Home from './Pages/Home'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import User from './Pages/UserList'
import Profile from './Pages/Profile'
import Setting from './Pages/Setting'
import { ClassCreation } from './Pages/ClassCreation'

export const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/signup',
    exact: true,
    component: SignUp,
  },
  {
    path: '/login',
    exact: true,
    component: Login,
  },
  {
    path: '/users',
    exact: true,
    component: User,
  },
  {
    path: '/profile',
    exact: true,
    component: Profile,
  },
  {
    path: '/setting',
    exact: true,
    component: Setting,
  },
  {
    path: '/classes/new-class',
    exact: true,
    component: ClassCreation,
  },
]
