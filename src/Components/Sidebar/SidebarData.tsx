import { SidebarItem } from './SidebarItem'
import { MdDashboard } from 'react-icons/md'
import { FiUsers, FiSettings } from 'react-icons/fi'
import { CgProfile } from 'react-icons/cg'
import { BiAddToQueue } from 'react-icons/bi'

export const SidebarData: SidebarItem[] = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <MdDashboard />,
  },
  {
    title: 'Class Creation',
    path: '/classes/new-class',
    icon: <BiAddToQueue />,
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
