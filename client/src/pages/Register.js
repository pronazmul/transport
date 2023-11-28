/* eslint-disable no-unused-vars */
import axios from 'axios' // Import axios
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

export default function Register() {
  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState({
    fullName: '',
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value })
  }

  const handleRegisterSubmit = async (e) => {
    e.preventDefault()

    // Validate the user input
    if (!inputValue.fullName) {
      toast.error('Please enter your full name', {
        position: 'top-left',
        width: '20px',
        height: '20px',
      })
      return
    }

    if (!inputValue.email) {
      toast.error('Please enter your email address', {
        position: 'top-left',
        width: '20px',
        height: '20px',
      })
      return
    }

    if (!inputValue.password) {
      toast.error('Please enter your password', {
        position: 'top-left',
        width: '20px',
        height: '20px',
      })
      return
    }

    //send input to server
    try {
      const { data } = await axios.post(
        'http://localhost:8000/api/users/signup',
        // JSON.stringify(inputValue),
        {
          ...inputValue,
        },
        { withCredentials: true }
      )

      console.log(data)
      const { success, message } = data
      if (success) {
        toast.success(message)
        navigate('/login')
      } else {
        toast.error(message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  return (
    <div className='mx-auto mt-12 max-w-md'>
      <header>
        <h2 className='text-[28px] font-medium mb-2'>
          Sign up with your email
        </h2>
        <p className='text-sm mb-5'>
          Already have an account?{' '}
          <Link
            className='text-blue-500 hover:underline decoration-blue-500'
            to='/login'
          >
            Sign in
          </Link>
        </p>
      </header>
      <form className='grid gap-y-2' noValidate onSubmit={handleRegisterSubmit}>
        <label className='flex flex-col' htmlFor='fullName'>
          <span className='text-sm mb-1 font-semibold'>Full Name</span>
          <input
            autoComplete='off'
            className='bg-gray-100 rounded-md outline-none px-3 py-2'
            type='text'
            id='fullName'
            name='fullName'
            placeholder='Mohammah Ali'
            value={inputValue.fullName}
            onChange={handleChange}
          />
        </label>
        <label className='flex flex-col' htmlFor='email'>
          <span className='text-sm mb-1 font-semibold'>Email address</span>
          <input
            autoComplete='off'
            className='bg-gray-100 rounded-md outline-none px-3 py-2'
            type='email'
            id='email'
            name='email'
            placeholder='mohammah@gmail.com'
            value={inputValue.email}
            onChange={handleChange}
          />
        </label>
        <label className='flex flex-col' htmlFor='password'>
          <span className='text-sm mb-1 font-semibold'>Password</span>
          <input
            autoComplete='off'
            className='bg-gray-100 rounded-md outline-none px-3 py-2'
            type='password'
            id='password'
            name='password'
            placeholder='Password'
            value={inputValue.password}
            onChange={handleChange}
          />
        </label>
        <label
          htmlFor='checkbox'
          className='flex items-center gap-1 py-4 ml-[1px]'
        >
          <input type='checkbox' name='checkbox' id='checkbox' />
          <p className='text-xs'>
            I agree to the{' '}
            <Link
              to
              className='text-blue-500 hover:underline decoration-blue-500'
            >
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link
              to
              className='text-blue-500 hover:underline decoration-blue-500'
            >
              Privacy Policy
            </Link>
          </p>
        </label>
        <button
          type='submit'
          className=' hover:bg-blue-600 py-2 bg-blue-500 text-white rounded-md'
        >
          Sign up
        </button>
      </form>
      <ToastContainer />
    </div>
  )
}
