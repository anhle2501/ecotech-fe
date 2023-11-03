import React from 'react'
import NumberMessage from './NumberMessage'
import Bell from './icon/Bell'

export default function BellNotification() {
  return (
    <>
         <button className='relative'>
            <Bell/>
            <NumberMessage number={1} location='absolute bottom-3 left-3'/>
        </button>
    </>
  )
}
