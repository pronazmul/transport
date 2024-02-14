import React from 'react'

const InputCheckbox = ({ label, value, error, ...attributes }) => {
  return (
    <label className='inline-flex items-center space-x-2'>
      <input
        type='checkbox'
        value={value}
        {...attributes}
        className='form-checkbox is-basic h-5 w-5 rounded border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accentbg ring-0 focus:ring-0 ring-offset-0 focus:ring-offset-0 bg-slate-300'
      />
      <span className='line-clamp-1 cursor-pointer'>{label}</span>
    </label>
  )
}

export default InputCheckbox
