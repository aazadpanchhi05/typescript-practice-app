import React from 'react'
import { Button } from '../Atoms/Button'
import { FormTitle } from '../Atoms/FormTitle'
import { InputField } from '../Atoms/InputField'
import { FormCard } from './Form/FormCard'
import { Link } from 'react-router-dom';

export const SignupForm = () => {

    return (
        <>
            <FormTitle text='Sign Up' />

            <FormCard>
                <form className='bg-white rounded'>
                    <div className="mb-4 md:flex md:justify-between">
                        <div className="mb-4 md:mr-2 md:mb-0">
                            <label className="block mb-2 text-sm font-bold text-gray-700">
                                First Name
                            </label>
                            <input
                                className="w-full px-3 py-2 text-sm text-gray-700 border rounded shadow appearance-none focus-outline focus:border-transparent"
                                id="firstName"
                                type="text"
                            />
                        </div>
                        <div className="md:ml-2">
                            <label className="block mb-2 text-sm font-bold text-gray-700">
                                Last Name
                            </label>
                            <input
                                className="w-full px-3 py-2 text-sm text-gray-700 border rounded shadow appearance-none focus-outline focus:border-transparent"
                                id="lastName"
                                type="text"
                            />
                        </div>
                    </div>

                    <InputField text='Email' type='email' />

                    <InputField text='Phone' type='text' />

                    <InputField text='Password' type='password' />

                    <InputField text='Confirm Password' type='password' />

                    <Button text='Sign Up' />
                </form>

                <div className='mt-5 text-sm font-medium'>
                    You have account ? <Link to='/login' className='text-yellow-500 hover:text-gray-900'>Login</Link>
                </div>

            </FormCard>
        </>
    )
}
