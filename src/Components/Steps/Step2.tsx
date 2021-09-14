import React, { useState } from 'react'

import Button from '../../Atoms/Button'
import { FormTitle } from '../../Atoms/FormTitle'
import Alert from '../../Atoms/Alert'
import { FormCard } from '../Form/FormCard'

import Multiselect from 'multiselect-react-dropdown'
import { ImCross } from 'react-icons/im'

import faker from 'faker'
import { useDispatch, useSelector } from 'react-redux'
import { RootStore } from '../../store/store'
import { addSchedule } from '../../store/actions/scheduleActions'
interface Props {
  nextPage: () => void
  prevPage: () => void
}

interface teacher {
  id: number
  name: string
  email: string
}

export const Step2 = ({ nextPage, prevPage }: Props) => {
  const schedule = useSelector((state: RootStore) => state.schedule)

  const dispatch = useDispatch()

  const [selectedTeacher, setSelectedTeachers] = useState<teacher[]>([])
  const [emailInput, setEmailInput] = useState('')
  const [emailTags, setEmailTags] = useState(schedule.students)
  const [emailType, setEmailType] = useState('everyone')

  const [error, setError] = useState('')

  const teachers: teacher[] = []

  const getTeachers = () => {
    for (let i = 0; i < 10; i++) {
      const obj = {
        id: i,
        name: faker.name.findName(),
        email: faker.internet.email(),
      }
      teachers.push(obj)
    }
  }

  getTeachers()

  const onTeacherSelect = (selectedList: any) => {
    setSelectedTeachers(selectedList)
  }

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError('')
    setEmailInput(e.target.value)
  }

  const onEmailKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    const { key } = e

    setError('')

    if (emailInput.match(emailRegex)) {
      if (key === 'Enter') {
        e.preventDefault()
        const emailList = [...emailTags, emailInput]
        setEmailTags(emailList)
        setEmailInput('')
      }
    } else {
      setError('Enter Valid Email')
    }
  }

  const deleteTag = (index: number) => {
    setEmailTags((prevState) => prevState.filter((tag, i) => i !== index))
  }

  const onEmailTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailType(e.target.value)
  }

  const onClick = () => {
    setError('')

    if (
      selectedTeacher.length === 0 ||
      emailTags.length === 0 ||
      emailType === ''
    ) {
      setError('Minimum one teacher and student is required')
    } else {
      const scheduleTemp = {
        title: schedule.title,
        subject: {
          id: schedule.subject.id,
          name: schedule.subject.name,
        },
        description: schedule.description,
        image: schedule.image,
        teachers: selectedTeacher,
        students: emailTags,
        emailType: emailType,
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
    tag: 'bg-blue-100 inline-flex items-center text-sm rounded my-2 mr-1 overflow-hidden',
    tagText: 'ml-2 mr-1 leading-relaxed truncate max-w-xs px-1',
    tagButton:
      'w-6 h-8 inline-block align-middle p-1 text-red-500 bg-blue-200 focus:outline-none',
  }

  return (
    <>
      <FormTitle text="Step 2 of 3" paragraph="Information" />
      <FormCard>
        <form className="bg-white rounded">
          {error.length > 0 && <Alert error={error} />}

          <label className={classes.lable}>Select Teachers *</label>
          <Multiselect
            options={teachers}
            displayValue="name"
            onSelect={onTeacherSelect}
            placeholder="Select Teachers"
          />

          <label className={classes.lable}>Student Email List *</label>
          <div className="">
            {emailTags.map((tag, i) => (
              <div key={i} className={classes.tag}>
                <span className={classes.tagText}>{tag}</span>
                <button
                  onClick={() => deleteTag(i)}
                  className={classes.tagButton}
                  type="button"
                >
                  <ImCross />
                </button>
              </div>
            ))}
            <input
              className={classes.inputField}
              id="emailTag"
              placeholder="Enter Students Email"
              value={emailInput}
              onChange={onEmailChange}
              onKeyPress={onEmailKeyPress}
            />
            <p className="text-xs text-gray-500">Press Enter to add email</p>
          </div>

          <div>
            <label className={classes.lable}>Email Option *</label>
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  name="emailType"
                  defaultChecked
                  value="Everyone"
                  onChange={onEmailTypeChange}
                />
                <span className="ml-2">Everyone</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  className="form-radio"
                  name="emailType"
                  value="Teachers Only"
                  onChange={onEmailTypeChange}
                />
                <span className="ml-2">Teachers Only</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  className="form-radio"
                  name="emailType"
                  value="Students Only"
                  onChange={onEmailTypeChange}
                />
                <span className="ml-2">Students Only</span>
              </label>
            </div>
          </div>

          <div className="flex flex-row space-x-5">
            <Button text="Back" onclick={prevPage} type="Danger" />
            <Button text="Next" onclick={onClick} />
          </div>

          <p className="pt-2 font-normal text-xs">All * fields are required </p>
        </form>
      </FormCard>
    </>
  )
}
