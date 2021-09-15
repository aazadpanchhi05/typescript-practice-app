import React from 'react'
import { FaRegCommentAlt } from 'react-icons/fa'
import { RiRecordCircleLine } from 'react-icons/ri'

interface Props {
  issues: any[]
  totalIssues: number
}

export const IssueTable = ({ issues, totalIssues }: Props) => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-10">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="bg-gray-100">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-row items-center">
                      <div className="mx-2 text-green-600 text-xl">
                        <RiRecordCircleLine />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {totalIssues} Open
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 flex flex-row py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="mt-1 mx-2">Comments</div>
                  </td>
                </tr>
                {issues &&
                  issues.length > 0 &&
                  issues.map((issue) => (
                    <tr key={issue.id} className="hover:bg-gray-100">
                      <td className="px-6 py-3 whitespace-nowrap">
                        <div className="flex flex-row items-center">
                          <div className="mx-2 text-green-600 text-xl">
                            <RiRecordCircleLine />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {issue.title}
                            </div>
                            <div className="text-sm text-gray-500">
                              #{issue.number} opened on{' '}
                              {issue.created_at.slice(0, 10)} by{' '}
                              {issue.user.login}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 flex flex-row py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="mt-1 mx-2">
                          <FaRegCommentAlt />
                        </div>
                        <div>{issue.comments}</div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
