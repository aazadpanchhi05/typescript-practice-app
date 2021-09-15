import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import Button from 'Atoms/Button'
import { FormTitle } from 'Atoms/FormTitle'
import Alert from 'Atoms/Alert'
import { FormCard } from '../Form/FormCard'

import { RootStore } from 'store/store'
import { addSchedule } from 'store/actions/scheduleActions'

interface Props {
  nextPage: () => void
  prevPage: () => void
}

export const Step3 = ({ nextPage, prevPage }: Props) => {
  const schedule = useSelector((state: RootStore) => state.schedule)

  const dispatch = useDispatch()

  const time = new Date()

  const defaultMin = time.getMinutes()

  const arr = time
    .toLocaleString('en-US', { hour: 'numeric', hour12: true })
    .split(' ')

  const [startDate, setStartDate] = useState<Date | null>(new Date())

  const [hour, setHour] = useState(arr[0])
  const [min, setMin] = useState(defaultMin >= 30 ? '30' : '00')
  const [day, setDay] = useState(arr[1])

  const [duration, setDuration] = useState(60)
  const [link, setLink] = useState('')
  const [note, setNote] = useState('')

  const [error, setError] = useState('')

  const onClick = () => {
    setError('')

    const urlRegex =
      /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i

    if (
      hour === '' ||
      min === '' ||
      day === '' ||
      link === '' ||
      duration === 0
    ) {
      setError('Required field cant be empty!')
    } else if (duration < 60 || duration > 240) {
      setError('Duration must be between 60 to 240')
    } else if (!urlRegex.test(link)) {
      setError('Link is unvalid')
    } else {
      const month = startDate?.getMonth()

      const date = `${startDate?.getDate()}/${
        month! + 1
      }/${startDate?.getFullYear()}`

      const scheduleTemp = {
        title: schedule.title,
        subject: {
          id: schedule.subject.id,
          name: schedule.subject.name,
        },
        description: schedule.description,
        image: schedule.image,
        teachers: schedule.teachers,
        students: schedule.students,
        emailType: schedule.emailType,
        date: date,
        time: `${hour}:${min} ${day}`,
        duration: duration,
        link: link,
        note: note,
      }

      const temp = {
        title: schedule.title,
        subject: {
          id: schedule.subject.id,
          name: schedule.subject.name,
        },
        description: schedule.description,
        teachers: schedule.teachers,
        students: schedule.students,
        emailType: schedule.emailType,
        date: date,
        time: `${hour}:${min} ${day}`,
        duration: duration,
        link: link,
        note: note,
      }

      localStorage.setItem('Schedule', JSON.stringify(temp))

      dispatch(addSchedule(scheduleTemp))
      nextPage()
    }
  }

  const classes = {
    lable: 'block text-sm font-bold mb-2 mt-3 text-gray-700',
    inputField:
      'mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-indigo-500 ',
    img: 'object-cover shadow w-full h-64 rounded',
    tag: 'bg-blue-100 inline-flex items-center text-sm rounded my-2 mr-1 overflow-hidden',
    tagText: 'ml-2 mr-1 leading-relaxed truncate max-w-xs px-1',
    tagButton:
      'w-6 h-8 inline-block align-middle p-1 text-red-500 bg-blue-200 focus:outline-none',
  }

  return (
    <>
      <FormTitle text="Step 3 of 3" paragraph="Information" />
      <FormCard>
        <form className="bg-white rounded">
          {error.length > 0 && <Alert error={error} />}

          <label className={classes.lable}>Select Date *</label>
          <DatePicker
            selected={startDate}
            className={classes.inputField}
            minDate={new Date()}
            dateFormat="dd/MM/yyyy"
            onChange={(date: Date | null) => date && setStartDate(date)}
          />

          <label className={classes.lable}>Select time *</label>
          <div className={classes.inputField}>
            <div className="flex">
              <select
                name="hours"
                className="bg-transparent appearance-none outline-none"
                onChange={(e) => {
                  setHour(e.target.value)
                }}
                defaultValue={arr[0]}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">10</option>
                <option value="12">12</option>
              </select>
              <span className="mr-3">:</span>
              <select
                name="minutes"
                className="bg-transparent appearance-none outline-none mr-4"
                onChange={(e) => {
                  setMin(e.target.value)
                }}
                defaultValue={defaultMin > 30 ? '30' : '00'}
              >
                <option value="00">00</option>
                <option value="30">30</option>
              </select>
              <select
                name="ampm"
                className="bg-transparent appearance-none outline-none"
                onChange={(e) => {
                  setDay(e.target.value)
                }}
                defaultValue={arr[1]}
              >
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            </div>
          </div>

          <label className={classes.lable}>Select Duration *</label>
          <input
            className={classes.inputField}
            id="duration"
            placeholder="Enter Duration"
            type="number"
            min="60"
            max="240"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
          />

          <label className={classes.lable}>Meeting Link *</label>
          <input
            className={classes.inputField}
            id="link"
            placeholder="Enter Link"
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />

          <label className={classes.lable}>Note</label>
          <textarea
            className={classes.inputField}
            id="note"
            placeholder="Enter Note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />

          <div className="flex flex-row space-x-5">
            <Button text="Back" onclick={prevPage} type="Danger" />
            <Button text="Submit" onclick={onClick} />
          </div>
          <p className="pt-2 font-normal text-xs">All * fields are required </p>
        </form>
      </FormCard>
    </>
  )
}
