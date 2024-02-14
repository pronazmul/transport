import React from 'react'
import { XMarkIcon } from '@heroicons/react/20/solid'
import { PlusCircleIcon } from '@heroicons/react/24/outline'
import { Formik } from 'formik'
import { toast } from 'react-hot-toast'
import * as yup from 'yup'

// Custom Modules
import {
  useGetCategoriesQuery,
  useUpdateCategoryMutation,
} from './../../../../store/categories/categoryApi'
import Modal from './../../../../shared/components/modal/Modal'
import InputText from './../../../../shared/components/inputs/InputText'
import SelectOption from './../../../../shared/components/selectOptions/SelectOption'

const categorySchema = yup.object({
  name: yup.string().required('Name is required!'),
  active: yup.string().required('Status is required!'),
  code: yup.number().required('Code is required!'),
})
const EditCategoryModal = ({ isOpen, setIsOpen, category }) => {
  const [updateCategory, { data, error }] = useUpdateCategoryMutation()
  const { refetch } = useGetCategoriesQuery()
  const handleModal = () => {
    setIsOpen(false)
  }

  const handleSubmitCategory = async (values, { setSubmitting }) => {
    values.active = String(values.active)
    updateCategory({ data: values, categoryId: category._id })
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

  return (
    <Modal open={isOpen} modalHandler={handleModal}>
      <div className={'p-5 card'}>
        <h2 className={' text-xl font-bold'}>Edit Category</h2>
        <Formik
          validationSchema={categorySchema}
          initialValues={{
            name: category.name,
            code: category.code,
            active: category.active,
          }}
          onSubmit={handleSubmitCategory}
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

              <SelectOption
                handleChange={setFieldValue}
                name={'active'}
                label={true}
                title={'User Status'}
                placeholder={'Select user status'}
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
                  <span>Cancel</span>
                </button>
                <button
                  disabled={isSubmitting}
                  type={'submit'}
                  className=' btn bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90 gap-2 py-3 border'
                >
                  <PlusCircleIcon className='h-5 w-5' />
                  <span>Update</span>
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </Modal>
  )
}

export default EditCategoryModal
