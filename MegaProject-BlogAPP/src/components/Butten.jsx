import React from 'react'

function Butten({
  children,
  type = "button",
  backgroundColor = "bg-blue-600",
  textcolor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
    type={type}
    className={`px-4 py-2 rounded-lg ${backgroundColor} ${textcolor} ${className}`}
    {...props}
    >
        {children}
    </button>
  )
}

export default Butten