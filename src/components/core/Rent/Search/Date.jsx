import React from 'react'
import { FaCalendarAlt } from 'react-icons/fa'
const Date = () => {
  return (
    <div className='flex flex-col flex-start space-y-1'>
      <h2 className=' text-slate-400'>When</h2>
      <button className='flex items-center justify-between gap-3'>
        <p className=' font-bold text-md'>Select Move-in Date</p>
        <div className='rounded-full bg-purple-400/20 p-1 '>
                <FaCalendarAlt className='dropdown-icon-primary' />
        </div>
        
      </button>

    </div>
  )
}

export default Date