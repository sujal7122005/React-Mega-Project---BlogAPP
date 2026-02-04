import React from 'react'
import logoImage from '../assets/logo.png'

function Logo({ width = '200px' }) {
  return (
    <img src={logoImage} alt="SupaBlog" style={{ width: width }} />
  )
}

export default Logo