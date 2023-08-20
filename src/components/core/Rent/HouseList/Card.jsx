import React from 'react'

const Card = ({title, img, location, type}) => {
   
  return (
    <div className='flex flex-col aspect-square'>
        <img src= {img} className='w-full aspect-[4/2] object-cover' alt="" />
    </div>
  )
}

export default Card