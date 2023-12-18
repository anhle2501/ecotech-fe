import React from 'react'
import ToolTips from '../components/ToolTips'

export default function FormDetails({ data = null }) {

  const inputStyle = 'border-b-2 border-b-blue-90 w-1/2';
  return (
    <> 
      <div className='md:grid md:grid-cols-2 flex flex-col'>
        {data?.map((e, index) => (
          <div key={index} className='flex gap-x-11'>
            <label className='w-2/5 pl-6' ><ToolTips content={e.name} className={'left-0 top-6 z-10'}> {e.name} :</ToolTips></label>
            {e.type === 'text' && <input className={inputStyle} placeholder={e.placeHolder ?? e.name} id={e.id} name={e.id} type={e.type} maxLength={e.maxLength} minLength={e.minLength} size={e.size}></input>}
            {e.type === 'number' && <input className={inputStyle} placeholder={e.placeHolder ?? e.name} id={e.id} name={e.id} type={e.type}></input>}
            {e.type === 'date' && <input className={inputStyle} placeholder={e.placeHolder ?? e.name} id={e.id} name={e.id} type={e.type}></input>}
            {e.type === 'email' && <input className={inputStyle} placeholder={e.placeHolder ?? e.name} id={e.id} name={e.id} type={e.type} required pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"></input>}
            {e.type === 'tel' && <input className={inputStyle} placeholder={e.placeHolder ?? e.name} id={e.id} name={e.id} type={e.type} pattern={e.pattern}></input>}

          </div>

        ))}
      </div>
    </>
  )
}
