import React, { ReactElement, useEffect, useState } from 'react'

import { IssueTable } from 'Components/IssueTable'
import { Pagination } from 'Components/Pagination'

import Alert from 'Atoms/Alert'
import { Loader } from 'Atoms/Loader'

export default function GithubIssue(): ReactElement {
  const [issues, setIssues] = useState<any[]>([])
  const [tableIssues, setTableIssues] = useState<any[]>([])

  const [currentPage, setCurrentPage] = useState(1)

  const [search, setSearch] = useState('')
  const [searchBoolean, setSearchBoolean] = useState(false)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    setLoading(true)

    fetch(`https://api.github.com/repos/airbnb/javascript/issues?per_page=40`)
      .then((res) => {
        const promise = res.json()
        promise.then((data) => {
          setLoading(false)
          setIssues(data)
          setTableIssues(data.slice(0, 10))
        })
      })
      .catch((err) => {
        setLoading(false)
        setError(err)
      })
  }, [])

  const setData = (n: number) => {
    setLoading(true)
    setCurrentPage(n)
    fetch(
      `https://api.github.com/repos/airbnb/javascript/issues?per_page=10&page=${n}`
    )
      .then((res) => {
        const promise = res.json()
        promise.then((data) => {
          setLoading(false)
          setTableIssues(data)
        })
      })
      .catch((err) => {
        setLoading(false)
        setError(err)
      })
  }

  const searchFilter = () => {
    setSearchBoolean(true)
    setTableIssues(
      issues.filter((issue) => {
        if (issue.title.toLowerCase().includes(search.toLocaleLowerCase())) {
          return true
        } else {
          return false
        }
      })
    )
  }

  const classes = {
    inputField:
      'mb-2 shadow appearance-none border rounded w-11/12 h-11 py-2 px-3 text-gray-700 focus:outline-none focus:border-indigo-500 ',
    btn: 'w-1/12 h-11 bg-indigo-500 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded',
    dangerBtn:
      'w-1/12 h-11 bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded"',
  }

  return (
    <div className="min-w-full p-3">
      <h1 className="text-center text-gray-700 text-4xl py-2">
        Github Issue Page
      </h1>

      {error.length > 0 && <Alert error={error} />}

      <div className="flex-row flex m-3 space-x-4">
        <input
          className={classes.inputField}
          id="title"
          placeholder="Search With Title"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button className={classes.btn} onClick={searchFilter}>
          Filter
        </button>

        <button
          className={classes.dangerBtn}
          onClick={() => {
            setTableIssues(issues.slice(0, 10))
            setSearchBoolean(false)
          }}
        >
          Clear
        </button>
      </div>

      {loading ? (
        <div className="mx-auto w-full flex flex-row justify-center">
          <Loader />
        </div>
      ) : (
        <>
          <IssueTable
            issues={tableIssues}
            totalIssues={searchBoolean ? tableIssues.length : issues.length}
          />

          <Pagination currentPage={currentPage} setData={setData} />
        </>
      )}
    </div>
  )
}
