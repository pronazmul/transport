import { XMarkIcon } from '@heroicons/react/20/solid'
import { PlusCircleIcon } from '@heroicons/react/24/outline'
import { Formik } from 'formik'
import { toast } from 'react-hot-toast'
import * as yup from 'yup'

// custom Module
import InputText from './../../../../shared/components/inputs/InputText'
import TextArea from './../../../../shared/components/inputs/TextArea'
import Modal from './../../../../shared/components/modal/Modal'
import SelectOption from './../../../../shared/components/selectOptions/SelectOption'

const userSchema = yup.object({
  name: yup.string().required('Name is required!'),
  email: yup.string().required('Email is required!'),
  password: yup.string().required('Password is required!'),
  bio: yup.string().required('Bio is required!'),
  location: yup.string().required('Location is required!'),
  type: yup.string().required('Role is required!'),
  active: yup.string().required('Status is required!'),
})
const ViewCategoryModal = ({ isOpen, setIsOpen }) => {
  const handleModal = () => {
    setIsOpen(false)
  }

  const handleSubmitUser = async (values, { setSubmitting }) => {
    toast.success(JSON.stringify(values))
    console.log(values)
  }
  return (
    <Modal open={isOpen} modalHandler={handleModal} panelSize={'max-w-xl'}>
      <div className={'p-5 dark:bg-darkColor shadow rounded-lg'}>
        <h2 className={' text-xl font-bold'}>Add User</h2>
        <Formik
          validationSchema={userSchema}
          initialValues={{
            name: '',
            email: '',
            password: '',
            bio: '',
            location: '',
            type: '',
            active: '',
          }}
          onSubmit={handleSubmitUser}
        >
          {({ handleSubmit, setFieldValue, handleChange, values, errors }) => (
            <form onSubmit={handleSubmit} className={'space-y-5 mt-5'}>
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
                label='Location'
                className=''
                placeholder={'Enter user location'}
                name={'location'}
                value={values.location}
                error={errors.location}
              />
              <div className={'grid gap-5 sm:grid-cols-2'}>
                <SelectOption
                  setFieldValue={setFieldValue}
                  name={'type'}
                  label={true}
                  title={'User Role'}
                  placeholder={'Select user role'}
                  value={values.type}
                  error={errors.type}
                  options={[
                    { value: 'admin', label: 'Admin' },
                    { value: 'user', label: 'User' },
                    { value: 'app', label: 'App' },
                    { value: 'media', label: 'Media' },
                    { value: 'list', label: 'list' },
                  ]}
                />
                <SelectOption
                  setFieldValue={setFieldValue}
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
              </div>

              <div className={'flex items-center gap-3 justify-center'}>
                <button
                  onClick={() => setIsOpen(false)}
                  type={'button'}
                  className='flex space-x-1 btn-indigo'
                >
                  <XMarkIcon className='h-5 w-5' />
                  <span>Cancel</span>
                </button>
                <button
                  type={'submit'}
                  className='flex space-x-1 btn-indigo-active'
                >
                  <PlusCircleIcon className='h-5 w-5' />
                  <span>Submit User</span>
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </Modal>
  )
}

export default ViewCategoryModal
