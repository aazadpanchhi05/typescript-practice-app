import { SidebarItem } from './SidebarItem'
import { MdDashboard, MdDateRange } from 'react-icons/md'
import { FiUsers, FiSettings } from 'react-icons/fi'
import { CgProfile } from 'react-icons/cg'
import { BiAddToQueue } from 'react-icons/bi'
import { AiFillGithub } from 'react-icons/ai'

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
    title: 'Github Issue',
    path: '/issue',
    icon: <AiFillGithub />,
  },
  {
    title: 'Calendar UI',
    path: '/calendar',
    icon: <MdDateRange />,
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
