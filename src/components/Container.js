// Core
import React from 'react'

// Libraries
import { twMerge } from 'tailwind-merge'

export default function Container({ children, className }) {
  const defaultClass = 'w-full max-w-grid mx-auto px-3'
  const combinedClass = twMerge(defaultClass, className)

  return (
    <div className={combinedClass}>{children}</div>
  )
}
