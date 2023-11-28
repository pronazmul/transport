import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../features/auth/authApi'

export default function Login() {
  const navigate = useNavigate()

  const [login, { data, isLoading, error }] = useLoginMutation()

  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  })

  const handleLoginSubmit = async (e) => {
    e.preventDefault()
    try {
      login(credentials)
    } catch (error) {
      console.log({ error })
    }
  }

  useEffect(() => {
    if (data?.user?._id) navigate('/')
  }, [data])

  console.log({ data, isLoading, error })
  return (
    <div className='mx-auto mt-12 max-w-md'>
      <header>
        <h2 className='text-[28px] font-medium mb-2'>Sign in</h2>
        <p className='text-sm mb-5'>
          Don't have an account?{' '}
          <Link
            className='text-blue-500 hover:underline decoration-blue-500'
            to='/register'
          >
            Sign up
          </Link>
        </p>
      </header>
      <form className='grid gap-y-2' onSubmit={handleLoginSubmit}>
        <label className='flex flex-col' htmlFor='email'>
          <span className='text-sm mb-1 font-semibold'>Email address</span>
          <input
            className='bg-gray-100 rounded-md outline-none px-3 py-2'
            type='email'
            id='email'
            placeholder='mohammah@gmail.com'
            value={credentials.email}
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
          />
        </label>
        <label className='flex flex-col' htmlFor='password'>
          <span className='text-sm mb-1 font-semibold'>Password</span>
          <input
            className='bg-gray-100 rounded-md outline-none px-3 py-2'
            type='password'
            id='password'
            placeholder='Password'
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
          />
        </label>
        <div className='py-3 flex items-center justify-between'>
          <label
            htmlFor='checkbox'
            className='flex items-center gap-1 ml-[1px]'
          >
            <input type='checkbox' name='checkbox' id='checkbox' />
            <p className='text-xs'>Remember me</p>
          </label>
          <Link
            to
            className='text-xs text-blue-500 hover:underline decoration-blue-500'
          >
            Forgot password?
          </Link>
        </div>

        <button
          disabled={isLoading}
          type='submit'
          className=' hover:bg-blue-600 py-2 bg-blue-500 text-white rounded-md'
        >
          Sign in
        </button>
      </form>
    </div>
  )
}
