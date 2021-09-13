import { SidebarItem } from './SidebarItem'
import { MdDashboard } from 'react-icons/md'
import { FiUsers, FiSettings } from 'react-icons/fi'
import { CgProfile } from 'react-icons/cg'

export const SidebarData: SidebarItem[] = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <MdDashboard />,
  },
  {
    title: 'User',
    path: '/users',
    icon: <FiUsers />,
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: <CgProfile />,
  },
  {
    title: 'Setting',
    path: '/setting',
    icon: <FiSettings />,
  },
]
