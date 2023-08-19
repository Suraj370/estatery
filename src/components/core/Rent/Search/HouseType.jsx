import React from 'react'
import { FaAngleDown } from 'react-icons/fa'
const HouseType = () => {
  return (
    <div className='flex flex-col flex-start space-y-1'>
    <h2 className=' text-slate-400'>Poperty Type</h2>
    <button className='flex items-center justify-between'>
      <p className=' font-bold text-md'>Houses</p>
      <div className='rounded-full bg-purple-400/20 p-1 '>
        <FaAngleDown className='dropdown-icon-primary' />
      </div>
    </button>

  </div>
  )
}

export default HouseType