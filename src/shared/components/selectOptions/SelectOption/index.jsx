import React from 'react'

const SelectOption = ({
  options = [],
  title,
  value,
  error,
  className = '',
  label,
  name,
  handleChange,
  placeholder,
  ...attributes
}) => {
  const onChange = (e) => {
    handleChange(name, e.target.value, true)
  }

  return (
    <div>
      <label className='block'>
        {label && <span>{title}</span>}
        <select
          onChange={onChange}
          className={`form-select mt-1.5 w-full rounded-lg border border-slate-300
          bg-white px-3 py-2 hover:border-slate-400 focus:border-primary 
          dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 
          dark:focus:border-accent ${className}`}
          defaultValue={value}
          {...attributes}
        >
          <option value=''>{placeholder}</option>
          {options?.map((option, i) => (
            <option key={i++} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
      {error && <span className='text-tiny+ text-error'>{error}</span>}
    </div>
  )
}

export default SelectOption
