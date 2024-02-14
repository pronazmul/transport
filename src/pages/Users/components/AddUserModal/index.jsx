import React, { useState } from 'react'
import { MapPinIcon, PencilIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { PlusCircleIcon } from '@heroicons/react/24/outline'
import { Formik } from 'formik'
import { toast } from 'react-hot-toast'
import * as yup from 'yup'

// Custom Modules
import {
  useAddUsersMutation,
  useGetUsersQuery,
} from './../../../../store/users/usersApi'
import Modal from './../../../../shared/components/modal/Modal'
import InputText from './../../../../shared/components/inputs/InputText'
import TextArea from './../../../../shared/components/inputs/TextArea'
import SelectOption from './../../../../shared/components/selectOptions/SelectOption'

const userSchema = yup.object({
  name: yup.string().required('Name is required!'),
  email: yup
    .string()
    .email('Please add valid email')
    .required('Email is required!'),
  password: yup.string().required('Password is required!'),
  type: yup.string().required('Role is required!'),
  place: yup.string().required('Place is required!'),
})
const AddUserModal = ({ isOpen, setIsOpen }) => {
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  const [avatarUrl, setAvatarUrl] = useState('')
  const [backgroundUrl, setBackgroundUrl] = useState('')
  const [addUsers, { data, error }] = useAddUsersMutation()
  const { refetch } = useGetUsersQuery()

  const handleModal = () => {
    setIsOpen(false)
  }

  const handleSubmitUser = async (values, { setSubmitting, resetForm }) => {
    const formdata = new FormData()
    formdata.append('type', values.type)
    formdata.append('name', values.name)
    formdata.append('email', values.email)
    formdata.append('password', values.password)
    if (values.avatar) {
      formdata.append('avatar', values.avatar[0])
    }
    if (values.background) {
      formdata.append('backgroundImage', values.backgroundImage[0])
    }
    const location = {
      name: values.place,
      type: 'Point',
      coordinates: [latitude, longitude],
    }

    // formdata.append("location", location);

    addUsers(formdata)
    setSubmitting(false)
    resetForm()
    setIsOpen(false)
  }
  React.useEffect(() => {
    if (data?.success) {
      toast.success(data.message)
      refetch()
    }
    if (error?.data) {
      toast.error(error.data?.message || error?.error || 'Something Went Wrong')
    }
  }, [data, error])

  const getCurrentLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
      })
    }
  }

  const handleUrl = (name, file) => {
    const imageSrc = URL.createObjectURL(file)

    if (name === 'avatar') {
      setAvatarUrl(imageSrc)
    }
    if (name === 'backgroundImage') {
      setBackgroundUrl(imageSrc)
    }
  }

  return (
    <Modal open={isOpen} modalHandler={handleModal} panelSize={'max-w-3xl'}>
      <div className={'card p-8'}>
        <Formik
          enableReinitialize
          validationSchema={userSchema}
          initialValues={{
            name: '',
            email: '',
            password: '',
            bio: '',
            type: '',
            backgroundImage: '',
            avatar: '',
            latitude: latitude,
            longitude: longitude,
            place: '',
          }}
          onSubmit={handleSubmitUser}
        >
          {({
            handleSubmit,
            setFieldValue,
            isSubmitting,
            handleChange,
            values,
            errors,
          }) => (
            <form onSubmit={handleSubmit} className={'space-y-5 mt-5'}>
              {/*images like avatar, background iamge*/}

              <div>
                <div className='h-36 rounded-lg bg-gray-200 dark:bg-accent relative block group'>
                  <img
                    className='h-full w-full rounded-lg object-cover object-center'
                    src={backgroundUrl}
                    alt='image'
                  />

                  <input
                    onChange={(e) => {
                      setFieldValue('backgroundImage', e.target.files)
                      handleUrl('backgroundImage', e.target.files[0])
                    }}
                    type={'file'}
                    className={'sr-only'}
                    name={'backgroundImage'}
                    id={'backgroundImage'}
                  />
                  <div className={'absolute duration-300  right-2 top-2'}>
                    <label
                      htmlFor={'backgroundImage'}
                      className={
                        'block duration-300  cursor-pointer hover:bg-darkColor p-2 bg-darkColor/50 rounded-full '
                      }
                    >
                      <PencilIcon className={'w-5 h-5 text-white'} />
                    </label>
                  </div>
                </div>
                <div className='px-4 py-2 sm:px-5'>
                  <div className='flex justify-between space-x-4'>
                    <div className='relative avatar group -mt-12 h-20 w-20 '>
                      <img
                        className='rounded-full border-2 border-white dark:border-navy-700 bg-gray-200'
                        src={avatarUrl}
                        alt='avatar'
                      />
                      <label
                        className={
                          'hidden  bg-darkColor/50 absolute inset-0 rounded-full group-hover:flex items-center justify-center cursor-pointer'
                        }
                        htmlFor={'avatar'}
                      >
                        <input
                          onChange={(e) => {
                            setFieldValue('avatar', e.target.files)
                            handleUrl('avatar', e.target.files[0])
                          }}
                          id={'avatar'}
                          name={'avatar'}
                          type={'file'}
                          className={'sr-only'}
                        />

                        <PencilIcon className={'w-5 h-5 text-white'} />
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className={'grid gap-5 sm:grid-cols-2'}>
                <InputText
                  onChange={handleChange}
                  label='Name'
                  className=''
                  placeholder={'Enter user name'}
                  name={'name'}
                  value={values.name}
                  error={errors.name}
                />
                <InputText
                  onChange={handleChange}
                  label='Email'
                  className=''
                  placeholder={'Enter user email'}
                  name={'email'}
                  value={values.email}
                  error={errors.email}
                />
              </div>

              <InputText
                onChange={handleChange}
                label='Password'
                className=''
                placeholder={'Enter user Password'}
                name={'password'}
                value={values.password}
                error={errors.password}
              />
              <TextArea
                onChange={handleChange}
                label='Bio'
                className=''
                placeholder={'Enter user bio'}
                name={'bio'}
                value={values.bio}
                error={errors.bio}
              />
              <InputText
                onChange={handleChange}
                label='Place'
                className=''
                placeholder={'Enter user place'}
                name={'place'}
                value={values.place}
                error={errors.place}
              />
              <div className={'flex items-center gap-3'}>
                <div className={'grid grid-cols-2 gap-3'}>
                  <InputText
                    onChange={handleChange}
                    label='Latitude'
                    className=''
                    placeholder={'Enter user location'}
                    name={'latitude'}
                    value={values.latitude}
                    error={errors.latitude}
                  />
                  <InputText
                    onChange={handleChange}
                    label='Longitude'
                    className=''
                    placeholder={'Enter user longitude'}
                    name={'longitude'}
                    value={values.longitude}
                    error={errors.longitude}
                  />
                </div>
                <div className={'flex items-center h-full'}>
                  <button
                    onClick={getCurrentLocation}
                    type={'button'}
                    className={
                      'flex items-center gap-2 mt-5 btn py-2.5 bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90'
                    }
                  >
                    Get
                    <MapPinIcon className={'w-5 h-5'} />
                  </button>
                </div>
              </div>
              <div className={'grid gap-5 sm:grid-cols-2'}>
                <SelectOption
                  handleChange={setFieldValue}
                  name={'type'}
                  label={true}
                  title={'User Role'}
                  placeholder={'Select user role'}
                  value={values.type}
                  error={errors.type}
                  options={[
                    { value: 'user', label: 'User' },
                    { value: 'app', label: 'App' },
                    { value: 'media', label: 'Media' },
                    { value: 'list', label: 'list' },
                  ]}
                />
              </div>

              <div className={'flex items-center gap-3 justify-center'}>
                <button
                  onClick={() => setIsOpen(false)}
                  type={'button'}
                  className='flex space-x-1 btn-indigo py-3'
                >
                  <XMarkIcon className='h-5 w-5' />
                  <span>Cancel</span>
                </button>

                <button
                  disabled={isSubmitting}
                  type={'submit'}
                  className=' btn bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90 gap-2 py-3 border'
                >
                  <PlusCircleIcon className='h-5 w-5' />
                  <span>Add User</span>
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </Modal>
  )
}

export default AddUserModal
