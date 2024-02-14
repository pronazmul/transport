import { XMarkIcon } from '@heroicons/react/20/solid'

// Custom Modules
import Modal from './../../../../shared/components/modal/Modal'
import ToggleSwitch from './../../../../shared/components/inputs/ToggleSwitch'

const ViewUserModal = ({ isOpen, setIsOpen, user }) => {
  const handleModal = () => {
    setIsOpen(false)
  }

  return (
    <Modal open={isOpen} modalHandler={handleModal} panelSize={'max-w-xl'}>
      <div className='card'>
        <div className='h-24 rounded-t-lg bg-primary dark:bg-accent'>
          <img
            className='h-full w-full rounded-t-lg object-cover object-center'
            src={user.backgroundImage}
            alt='image'
          />
        </div>
        <div className='px-4 py-2 sm:px-5'>
          <div className='flex justify-between space-x-4'>
            <div className='avatar -mt-12 h-20 w-20'>
              <img
                className='rounded-full border-2 border-white dark:border-navy-700'
                src={user.avatar}
                alt='avatar'
              />
            </div>
          </div>
          <h3 className='pt-2 text-lg font-medium text-slate-700 dark:text-navy-100'>
            {user.name}
          </h3>
          <p className='text-xs'>{user.location.name}</p>
          <div className='flex items-center space-x-3 pt-2 pb-3'>
            <ul className='space-y-5 w-full'>
              <li className={'flex items-center'}>
                <div className={'basis-1/4 flex items-center gap-2'}>
                  <span> Email</span>
                </div>
                <div>{user.email}</div>
              </li>
              <li className={'flex items-centerl'}>
                <div className={'basis-1/4 flex items-center gap-2'}>
                  <span>Role</span>
                </div>
                <div>{user.type}</div>
              </li>
              <li className={'flex items-center'}>
                <div className={'basis-1/4 flex items-center gap-2'}>
                  <span>Status</span>
                </div>

                <ToggleSwitch disabled checked={user.active} />
              </li>
            </ul>
          </div>
        </div>
        <div className={'mt-6 p-5 flex justify-end'}>
          <button
            onClick={() => setIsOpen(false)}
            type={'button'}
            className='flex space-x-1 btn-indigo'
          >
            <XMarkIcon className='h-5 w-5' />
            <span>Close</span>
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default ViewUserModal
