import { TrashIcon } from '@heroicons/react/24/outline'
import { XMarkIcon } from '@heroicons/react/20/solid'
import Modal from '../Modal'

const ConfirmModal = ({ open, setDelete, handleConfirm }) => {
  const closeModal = () => {
    setDelete(false)
  }
  return (
    <Modal open={open} modalHandler={closeModal}>
      <div className={'card p-2'}>
        <div className={'flex justify-end'}>
          <button
            onClick={closeModal}
            className={'p-1 hover:bg-gray-700 rounded-xl'}
          >
            <XMarkIcon className={'w-6 h-6'} />
          </button>
        </div>
        <div className={'p-6  space-y-5'}>
          <div className={'flex flex-col items-center space-y-5'}>
            <TrashIcon className={'w-10 h-10'} />
            <p>Are you sure you want to delete this item?</p>
          </div>
          <div className={'flex items-center justify-center gap-4'}>
            <button
              onClick={closeModal}
              className={
                'btn border border-slate-300 font-medium text-slate-800 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-50 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90'
              }
            >
              No, Cancel
            </button>
            <button
              className={
                'btn bg-error font-medium text-white hover:bg-error-focus focus:bg-error-focus active:bg-error-focus/90'
              }
              onClick={handleConfirm}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default ConfirmModal
