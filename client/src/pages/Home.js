import React, { useState } from 'react'
import LoginForm from '../components/forms/LoginForm'
import { Button } from '@mui/material'
import RegisterForm from '../components/forms/RegisterForm'

const Home = () => {
  const [formType, setFromType] = useState('login')

  return (
    <>
      <div className='flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <img
            className='mx-auto h-10 w-auto'
            src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
            alt='Your Company'
          />
          <h2 className='mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
            {formType === 'login'
              ? ' Login your account'
              : 'Register new account'}
          </h2>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-[420px]'>
          <div className='bg-white px-6 py-12 shadow-lg sm:rounded-lg sm:px-12'>
            <div className='flex items-center bg-gray-200 mb-10'>
              <Button
                onClick={() => setFromType('login')}
                className='w-full'
                type='submit'
                variant={formType === 'login' ? 'contained' : 'text'}
              >
                Login
              </Button>

              <Button
                onClick={() => setFromType('register')}
                className='w-full'
                type='submit'
                variant={formType === 'register' ? 'contained' : 'text'}
              >
                Register
              </Button>
            </div>

            {formType === 'login' ? <LoginForm /> : <RegisterForm />}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
