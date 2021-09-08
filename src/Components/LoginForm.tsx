import React, { ReactElement } from 'react'
import { Button } from '../Atoms/Button'
import { FormTitle } from '../Atoms/FormTitle'
import { InputField } from '../Atoms/InputField'
import { FormCard } from './Form/FormCard'
import { Link } from 'react-router-dom';

interface Props {

}

export default function LoginForm({ }: Props): ReactElement {
    return (
        <>
            <FormTitle text='Login' />
            <FormCard>
                <form className='bg-white rounded'>

                    <InputField text='Email' type='email' />

                    <InputField text='Password' type='password' />

                    <Button text='Login' />
                </form>

                <div className='mt-5 text-sm font-medium'>
                    You don't have account ? <Link to='/' className='text-yellow-500 hover:text-gray-900'>Register</Link>
                </div>

            </FormCard>
        </>
    )
}
