import React from 'react'

export default function FeatureList({ listFeatures, className = null }) {
  return (
    listFeatures.map((ele, index) => (
      <div key={index} className={'hover:bg-gray-200 p-0.5 text-sm rounded-lg ' + className}>
        {ele}
      </div>
    ))
  )
}
