import React from 'react'

function Butten({
  children,
  type = "button",
  backgroundColor = "bg-gradient-to-r from-indigo-600 to-purple-600",
  textcolor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
    type={type}
    className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] ${backgroundColor} ${textcolor} ${className}`}
    {...props}
    >
        {children}
    </button>
  )
}

export default Butten