import React from 'react'
import ReactQuill from 'react-quill'

const TextEditor = ({
  label = '',
  value,
  error,
  className = '',
  ...attributes
}) => {
  return (
    <div>
      <label className='block'>
        <span>{label}</span>
        <ReactQuill
          theme='snow'
          {...attributes}
          className={` mt-1.5 peer w-full rounded-lg bg-transparent placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent ${className}
  }`}
        />
      </label>
      {value && error && <span className='text-tiny+ text-error'>{error}</span>}
    </div>
  )
}
export default TextEditor
