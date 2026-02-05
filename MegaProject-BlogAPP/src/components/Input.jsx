import { forwardRef } from 'react'
import { useId } from 'react'

const Input = forwardRef(function Input(
    {
        type = 'text',
        label,
        className = '',
        ...props
    },
    ref
){
    const id = useId();
    return (
        <div className='w-full'>
            {label && <label className="inline-block mb-2 text-sm font-medium text-slate-700"
            htmlFor={id}>
                {label}
            </label>}
            <input 
            type={type} 
            className={`px-4 py-3 rounded-xl bg-white text-slate-800 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent duration-200 border border-slate-200 w-full placeholder:text-slate-400 shadow-sm hover:border-slate-300 ${className}`} 
            ref={ref} 
            {...props}
            id={id} />
        </div>

    )
})


export default Input