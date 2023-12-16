import React from 'react'
import * as yup from 'yup'
import { Link } from 'react-router-dom'
import {
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  TextField,
} from '@mui/material'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { login } from '../../lib/http'
import { useState } from 'react'
import { useEffect } from 'react'

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
})

const LoginForm = () => {
  let [loginData, setLoginData] = useState()
  let [makeRequest, setMakeRequet] = useState(false)

  let { data, isPending, isError, error } = useQuery({
    queryKey: ['auth'],
    queryFn: () => login(loginData),
    enabled: makeRequest,
  })

  console.log({ data, isPending, isError, error })

  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      setLoginData(values)
      setMakeRequet(true)
    },
  })

  useEffect(() => {
    if (data?._id) {
      navigate('/dashboard')
    }
  }, [data, navigate])

  return (
    <form className='space-y-6' onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        id='email'
        name='email'
        label='Email'
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        fullWidth
        id='password'
        name='password'
        label='Password'
        type='password'
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />

      <div className='flex items-center justify-between'>
        <div className='items-top flex space-x-2'>
          <FormControlLabel
            control={<Checkbox name='remember-me' />}
            label='Remember me'
          />
        </div>

        <div className='text-sm leading-6'>
          <Link
            to='/forgot-password'
            className='font-semibold text-blue-600 hover:text-blue-500'
          >
            Forgot password?
          </Link>
        </div>
      </div>

      <div>
        <Button
          disabled={formik.isSubmitting}
          className='w-full'
          type='submit'
          variant='contained'
        >
          {formik.isSubmitting ? <CircularProgress size={20} /> : 'Login'}
        </Button>
      </div>
    </form>
  )
}

export default LoginForm
