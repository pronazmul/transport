import React from 'react'

const TextArea = ({
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
                <textarea
                    value={value}
                    {...attributes}
                    className={` mt-1.5 form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2  placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent ${className}
    }`}
                />
            </label>
            {error && <span className='text-tiny+ text-error'>{error}</span>}
        </div>
    )
}

export default TextArea
