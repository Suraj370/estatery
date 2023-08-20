import React from 'react'
import bathtub from '../../../../assets/icons/bathtub.png'
import bed from '../../../../assets/icons/double-bed.png'
import plot from '../../../../assets/icons/plot.png'

const Card = ({title, img, address, price, rooms, bathroom, land}) => {
   
  return (
    <div className='flex flex-col bg-white rounded-md font-rubik'>
        <img src= {img} className='w-full aspect-[4/2] object-cover rounded-t-md' alt="" />
        <div className=' p-4 space-y-2 flex flex-col'>
          <p className='text-2xl font-extrabold  text-violet-600 tracking-wide '>${price}<sup className='text-sm text-slate-400/80'> /month</sup></p>
           <h1 className=' text-3xl tracking-tight'>{title}</h1>
           <p className='text-slate-400'>{address}</p>
        </div>
        <div className='flex gap-2 justify-between items-center py-4 mx-4 border-t-2'>
          <div className='flex items-center gap-1'>
            <img src={bed} className=' w-5 h-5' />
              <p>{rooms}</p>
          </div>
          <div className='flex items-center gap-1'>
            <img src={bathtub} className=' w-5 h-5' />
              <p>{bathroom}</p>
          </div>
          <div className='flex items-center gap-1'>
            <img src={plot} className=' w-5 h-5' />
              <p>{land} m<sup>2</sup></p>
          </div>
        </div>
    </div>
  )
}

export default Card