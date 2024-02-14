import React from 'react'
import { XMarkIcon } from '@heroicons/react/20/solid'
import { PlusCircleIcon } from '@heroicons/react/24/outline'
import { Formik } from 'formik'
import { toast } from 'react-hot-toast'
import * as yup from 'yup'

// Custom Moules
import {
  useAddCategoryMutation,
  useGetCategoriesQuery,
} from './../../../../store/categories/categoryApi'
import Modal from './../../../../shared/components/modal/Modal'
import InputText from './../../../../shared/components/inputs/InputText'

const categorySchema = yup.object({
  name: yup.string().required('Name is required!'),
  code: yup.number().required('Code is required!'),
})

const AddCategoryModal = ({ isOpen, setIsOpen }) => {
  const [addCategory, { data, error }] = useAddCategoryMutation()
  const { refetch } = useGetCategoriesQuery()

  const handleModal = () => {
    setIsOpen(false)
  }

  const handleSubmitCategory = async (values, { resetForm, setSubmitting }) => {
    addCategory(values)
    setSubmitting(false)
    resetForm()
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

  return (
    <Modal open={isOpen} modalHandler={handleModal}>
      <div className={'p-5 card'}>
        <h2 className={' text-xl font-bold'}>Add User</h2>
        <Formik
          validationSchema={categorySchema}
          initialValues={{
            name: '',
            code: '',
          }}
          onSubmit={handleSubmitCategory}
        >
          {({ handleSubmit, isSubmitting, handleChange, values, errors }) => (
            <form onSubmit={handleSubmit} className={'space-y-5 mt-5'}>
              <InputText
                onChange={handleChange}
                label='Name'
                className=''
                placeholder={'Enter category name'}
                name={'name'}
                value={values.name}
                error={errors.name}
              />
              <InputText
                onChange={handleChange}
                label='Code'
                className=''
                placeholder={'Enter category code '}
                name={'code'}
                value={values.code}
                error={errors.code}
                type={'number'}
              />

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
                  <span>Add Category</span>
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </Modal>
  )
}

export default AddCategoryModal
