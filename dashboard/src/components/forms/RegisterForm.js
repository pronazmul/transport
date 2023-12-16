import React from 'react'
import { useFormik } from 'formik'

import { Button, CircularProgress, TextField } from '@mui/material'
import { register } from '../../lib/http'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const RegisterForm = () => {
  let [registerData, setRegisterData] = useState()
  let [makeRequest, setMakeRequet] = useState(false)

  let { data, isPending, isError, error } = useQuery({
    queryKey: ['register'],
    queryFn: () => register(registerData),
    enabled: makeRequest,
  })

  console.log({ data, isPending, isError, error })
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirm_password: '',
    },
    onSubmit: (values, { setSubmitting }) => {
      delete values.confirm_password
      setRegisterData(values)
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
        id='name'
        name='name'
        label='Full Name'
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
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
      <TextField
        fullWidth
        id='confirm_password'
        name='confirm_password'
        label='Confirm Password'
        type='password'
        value={formik.values.confirm_password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />

      <div>
        <Button
          disabled={formik.isSubmitting}
          className='w-full'
          type='submit'
          variant='contained'
        >
          {formik.isSubmitting ? <CircularProgress size={20} /> : 'Register'}
        </Button>
      </div>
    </form>
  )
}

export default RegisterForm
