import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Button from 'Atoms/Button'
import { FormTitle } from 'Atoms/FormTitle'
import Alert from 'Atoms/Alert'
import { FormCard } from '../Form/FormCard'

import { RootStore } from 'store/store'
import { addSchedule } from 'store/actions/scheduleActions'

import subjects from 'config/subjects'

interface Props {
  nextPage: () => void
}

export const Step1 = ({ nextPage }: Props) => {
  const schedule = useSelector((state: RootStore) => state.schedule)

  const dispatch = useDispatch()

  const [title, setTitle] = useState(schedule.title)
  const [subject, setSubject] = useState(schedule.subject)
  const [topicDesc, setTopicDesc] = useState(schedule.description)
  const [image, setImage] = useState(schedule.image)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const n = e.target.value

    const id = subjects.findIndex((i) => i.name === n)

    setSubject({
      id: id,
      name: n,
    })
  }

  const imageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImage(URL.createObjectURL(e.target.files![0]))
  }

  const onClick = () => {
    setError('')

    if (title === '' || topicDesc === '' || subject.id === -1) {
      setError('Required field cant be empty!')
    } else {
      const scheduleTemp = {
        title: title,
        subject: {
          id: subject.id,
          name: subject.name,
        },
        description: topicDesc,
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

      dispatch(addSchedule(scheduleTemp))

      nextPage()
    }
  }

  const classes = {
    lable: 'block text-sm font-bold mb-2 mt-3 text-gray-700',
    inputField:
      'mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-indigo-500 ',
    img: 'object-cover shadow w-full h-64 rounded',
  }

  return (
    <>
      <FormTitle text="Step 1 of 3" paragraph="Basic Details" />
      <FormCard>
        <form className="bg-white rounded">
          {error.length > 0 && <Alert error={error} />}

          <label className={classes.lable}>Class Title *</label>
          <input
            className={classes.inputField}
            id="classTitle"
            placeholder="Enter Class Title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label className={classes.lable}>Select Subject: *</label>
          <select
            name="subjects"
            id="subjects"
            className={classes.inputField}
            onChange={handleChange}
          >
            {subjects.map(({ name, id }) => (
              <option value={name} key={id}>
                {name}
              </option>
            ))}
          </select>

          <label className={classes.lable}>Topic Description *</label>
          <textarea
            className={classes.inputField}
            id="topicDesc"
            placeholder="Enter Topic Description"
            value={topicDesc}
            onChange={(e) => setTopicDesc(e.target.value)}
          />

          <label className={classes.lable}>Select Image</label>
          {image && <img src={image} alt="Selected" className={classes.img} />}
          <input
            className={`${classes.inputField} mt-2`}
            id="image"
            type="file"
            onChange={imageHandler}
          />

          <Button text="Next" onclick={onClick} />

          <p className="pt-2 font-normal text-xs">All * fields are required </p>
        </form>
      </FormCard>
    </>
  )
}
