import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../Atoms/Button'
import { removeSchedule } from '../../store/actions/scheduleActions'
import { RootStore } from '../../store/store'
import { FormCard } from '../Form/FormCard'

interface Props {
  resetPage: () => void
}

export const Success = ({ resetPage }: Props) => {
  const schedule = useSelector((state: RootStore) => state.schedule)

  const dispatch = useDispatch()

  const {
    title,
    subject,
    description,
    image,
    teachers,
    students,
    emailType,
    date,
    time,
    duration,
    link,
    note,
  } = schedule

  const handleReset = () => {
    const scheduleTemp = {
      title: '',
      subject: {
        id: -1,
        name: '',
      },
      description: '',
      image: image,
      teachers: [],
      students: [],
      emailType: '',
      date: '',
      time: '',
      duration: 0,
      link: '',
      note: '',
    }

    dispatch(removeSchedule(scheduleTemp))

    resetPage()
  }

  return (
    <>
      <FormCard>
        <div className="text-2xl text-gray-700">Class Creation Details</div>
        <div className="mt-3 space-y-4 divide-y-2">
          <div className="space-y-2">
            <div className="text-xl text-gray-700">Basic Details</div>
            <div>
              <strong>Title:</strong> {title}
            </div>

            <div>
              <strong>Subject:</strong> {subject.name} (id:{subject.id})
            </div>

            <div>
              <strong>Description:</strong> {description}
            </div>

            {image && (
              <>
                <strong>Image:</strong>
                <img src={image} alt="Selected" className={image} />
              </>
            )}
          </div>

          <div className="space-y-2">
            <div className="text-xl mt-1 text-gray-700">
              Teacher And Student Details
            </div>

            <div className="flex flex-col">
              <strong>Teachers List:</strong>
              {teachers.map((item, index) => (
                <>
                  <span className="mt-1">Name: {item.name}</span>
                  <span>Email: {item.email}</span>
                </>
              ))}
            </div>

            <div className="flex flex-col">
              <strong>Students Email List:</strong>
              {students.map((item, index) => (
                <>
                  <span className="mt-1">Email: {item}</span>
                </>
              ))}
            </div>

            <div>
              <strong>Who Get's Email:</strong> {emailType}
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-xl mt-1 text-gray-700">Schedule Details</div>

            <div>
              <strong>Schedule Date:</strong> {date}
            </div>

            <div>
              <strong>Schedule Time:</strong> {time}
            </div>

            <div>
              <strong>Schedule Duration:</strong> {duration} min
            </div>

            <div>
              <strong>Schedule Link:</strong>{' '}
              <a href={link} className="text-blue-500 ">
                {' '}
                {link}{' '}
              </a>
            </div>

            {note && (
              <div>
                <strong>Note:</strong> {note}
              </div>
            )}
          </div>

          <Button text="Reset" type="Danger" onclick={handleReset} />
        </div>
      </FormCard>
    </>
  )
}
