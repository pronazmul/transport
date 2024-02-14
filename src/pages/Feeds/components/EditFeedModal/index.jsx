import React, { useState } from 'react'
import { Formik } from 'formik'
import { XMarkIcon } from '@heroicons/react/20/solid'
import { PlusCircleIcon } from '@heroicons/react/24/outline'
import * as yup from 'yup'
import { toast } from 'react-hot-toast'

// Custom Modules
import {
  useGetFeedsQuery,
  useUpdateFeedMutation,
} from './../../../../store/feeds/feedApi'
import Modal from './../../../../shared/components/modal/Modal'
import InputText from './../../../../shared/components/inputs/InputText'
import TextArea from './../../../../shared/components/inputs/TextArea'
import SelectOption from './../../../../shared/components/selectOptions/SelectOption'

const feedSchema = yup.object({
  title: yup.string().required('Title is required!'),
  description: yup.string().required('Description is required!'),
  place: yup.string().required('Place is required!'),
  link: yup.string().required('Link is required!'),
  active: yup.string().required('Active is required!'),
  location: yup.string().required('Location is required!'),
})

const EditFeedModal = ({ isOpen, setIsOpen, feed }) => {
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')

  const [updateFeed, { data, error }] = useUpdateFeedMutation()
  const { refetch } = useGetFeedsQuery()
  const onClose = () => {
    setIsOpen(false)
  }

  const handleUpdateFeed = (values, { setSubmitting }) => {
    const { place, title, description, link } = values

    const body = {
      // location: {
      //     "name": place,
      //     "type": "Point",
      //     "coordinates": [latitude, longitude]
      // },
      title,
      description,
      link,
    }
    updateFeed({ data: body, feedId: feed._id })
    setSubmitting(false)
  }

  React.useEffect(() => {
    if (data?.success) {
      toast.success(data.message)
      refetch()
    }
    if (error?.data) {
      toast.error(error.data?.message || error?.error || 'Something Went Wrong')
    }
  }, [data])

  const getCurrentLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
      })
    }
  }

  return (
    <Modal open={isOpen} modalHandler={onClose} panelSize={'max-w-xl'}>
      <div className={'card p-5'}>
        <Formik
          validationSchema={feedSchema}
          initialValues={{
            title: feed.title,
            description: feed.description,
            place: feed.location.name,
            link: feed.link,
            active: feed.active,
            location: `${latitude ? latitude : feed.location.coordinates[0]}, ${
              longitude ? longitude : feed.location.coordinates[1]
            }`,
          }}
          enableReinitialize
          onSubmit={handleUpdateFeed}
        >
          {({
            handleSubmit,
            setFieldValue,
            isSubmitting,
            handleChange,
            errors,
            values,
          }) => (
            <form onSubmit={handleSubmit} className={'space-y-4 mt-4'}>
              <InputText
                onChange={handleChange}
                label='Title'
                className=''
                placeholder={'Enter title'}
                name={'title'}
                value={values.title}
                error={errors.title}
              />
              <TextArea
                rows={5}
                onChange={handleChange}
                label='Description'
                className=''
                placeholder={'Enter description'}
                name={'description'}
                value={values.description}
                error={errors.description}
              />
              <InputText
                onChange={handleChange}
                label='Place'
                className=''
                placeholder={'Enter place'}
                name={'place'}
                value={values.place}
                error={errors.place}
              />
              <div className={'flex items-center gap-3'}>
                <InputText
                  onChange={handleChange}
                  label='Location'
                  className=''
                  placeholder={'Enter location'}
                  name={'location'}
                  value={values.location}
                  error={errors.location}
                />
                <div className={'flex items-center h-full'}>
                  <button
                    onClick={getCurrentLocation}
                    type={'button'}
                    className={
                      'mt-5 btn py-2.5 bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90'
                    }
                  >
                    Get Location
                  </button>
                </div>
              </div>

              <InputText
                onChange={handleChange}
                label='Link url'
                className=''
                placeholder={'Enter link url'}
                name={'link'}
                value={values.link}
                error={errors.link}
              />
              <SelectOption
                handleChange={setFieldValue}
                name={'active'}
                label={true}
                title={'Feed status'}
                placeholder={'Select feed status'}
                value={values.active}
                error={errors.active}
                options={[
                  { value: 'true', label: 'Active' },
                  { value: 'false', label: 'Inactive' },
                ]}
              />
              <div className={'flex items-center gap-3 justify-center'}>
                <button
                  onClick={() => setIsOpen(false)}
                  type={'button'}
                  className='flex space-x-1 btn-indigo py-3'
                >
                  <XMarkIcon className='h-5 w-5' />
                  <span>Close</span>
                </button>

                <button
                  disabled={isSubmitting}
                  type={'submit'}
                  className=' btn bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90 gap-2 py-3 border'
                >
                  <PlusCircleIcon className='h-5 w-5' />
                  <span>Update Feed</span>
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </Modal>
  )
}

export default EditFeedModal
