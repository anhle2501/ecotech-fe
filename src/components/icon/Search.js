import React from 'react'

export default function Search({className=null}) {
  return (
    <>
    <svg
            width='24'
            height='24'
            fill='none'
            aria-hidden='true'
            class={className}
          >
            <path
              d='m19 19-3.5-3.5'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            ></path>
            <circle
              cx='11'
              cy='11'
              r='6'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            ></circle>
          </svg>
          </>
  )
}
