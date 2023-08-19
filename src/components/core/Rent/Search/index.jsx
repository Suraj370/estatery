import React, {useContext} from 'react'
import Location from './Location'
import Date from './Date'
import PriceRange from './PriceRange'
import HouseType from './HouseType'

import { PropertyContext } from '../../../../Context'

const Search = () => {
  const {handleClick} = useContext(PropertyContext)

  return (
    <div className='bg-white  px-[30px] py-[22px] mx-auto my-2 max-w-[1170px] flex flex-col md:flex-row items-center rounded-sm relative lg:-top-4'>
    <div className='flex-1 p-4 md:border-r-2 w-full '>
      <Location/>
    </div>
    <div className='flex-[1.5] p-4 md:border-r-2 w-full'>
      <Date/>
    </div>
    <div className='flex-1 p-4 md:border-r-2 w-full'>
      <PriceRange/>
    </div>
    <div className='flex-1 p-4 md:border-r-2 w-full'>
      <HouseType/>
    </div>
    <div className='flex-1 p-4'>
      <button onClick={() => handleClick()} className="rounded-[8px] border bg-violet-600 text-white px-[20px] py-[8px]">
          Search
      </button>
    </div>
  </div>
  )
}

export default React.memo(Search)