import React, {forwardRef, useId} from 'react'

function Select({
    options,
    label,
    className = '',
    ...props
}, ref) {
    const id = useId()
  return (
    <div className='w-full'>
        {label && (
            <label htmlFor={id} className='inline-block mb-2 text-sm font-medium text-slate-700'>
                {label}
            </label>
        )}
        <select
        {...props}
        id={id}
        ref={ref}
        className={`px-4 py-3 rounded-xl bg-white text-slate-800 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent duration-200 border border-slate-200 w-full shadow-sm hover:border-slate-300 cursor-pointer ${className}`}
        >
            {options?.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
  )
}

export default React.forwardRef(Select)