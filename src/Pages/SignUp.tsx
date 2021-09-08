import React, { ReactElement } from 'react';
import { Button } from '../Atoms/Button';
import { SignupForm } from '../Components/SignupForm';

export default function SignUp(): ReactElement {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
            <SignupForm/>
        </div>
    )
}