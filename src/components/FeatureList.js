import React from 'react'

export default function FeatureList({listFeatures}) {
  return (
    listFeatures.map((ele) => (
        <div className='hover:bg-gray-200 p-0.5 text-sm rounded-lg'>
            {ele}
         </div>
    ))
  )
}
