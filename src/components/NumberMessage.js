import React from 'react'

export default function NumberMessage({ number = 0, location = null }) {
  return (
    number != 0 &&
    <div className={location +
      ' rounded-full text-center font-bold antialiased font-sans text-xs h-4 w-4 bg-red-500 text-white'}>{number}</div>
  )
}
