// Core
import React from 'react'

export default function TitleSection({ subtitle, title }) {
  return (
    <div className='mb-14 space-y-1'>
      <span className='font-xl font-semibold text-white text-opacity-70'>{subtitle}</span>
      <h2 className='font-poppins text-5xl/tight'>{title}</h2>
    </div>
  )
}
