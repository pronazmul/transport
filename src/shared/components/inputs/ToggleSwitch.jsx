import React from 'react'

const ToggleSwitch = ({ checked }) => {
  const [check, setCheck] = React.useState(checked)

  return (
    <label className='inline-flex items-center space-x-2'>
      <input
        onChange={() => setCheck(!check)}
        checked={check}
        className='form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:!bg-success
                   checked:bg-none checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:before:bg-white'
        type='checkbox'
      />
    </label>
  )
}

export default ToggleSwitch
