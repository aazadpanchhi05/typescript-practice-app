import React from 'react'

import { Link } from 'react-router-dom'

interface Props {
  setData: (n: number) => void
  currentPage: number
  totalPosts: number
  issuesPerPage: number
}

export const Pagination = ({
  setData,
  currentPage,
  totalPosts,
  issuesPerPage,
}: Props) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / issuesPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div className="py-2 ml-2">
      <nav className="block">
        <ul className="flex pl-0 rounded list-none flex-wrap">
          <li>
            {pageNumbers.map((number) => (
              <Link
                onClick={() => {
                  setData(number)
                }}
                to="#"
                className={
                  currentPage === number
                    ? 'bg-indigo-500 border-indigo-500 text-white hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
                    : 'bg-white border-gray-300 text-gray-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
                }
              >
                {number}
              </Link>
            ))}
          </li>
        </ul>
      </nav>
    </div>
  )
}
