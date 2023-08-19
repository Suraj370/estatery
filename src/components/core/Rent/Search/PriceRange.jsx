import React, {useState, useEffect, useContext} from 'react'

import { Menu } from '@headlessui/react'
import { PropertyContext } from '../../../../Context'
import { FaAngleDown } from 'react-icons/fa'

const PriceRange = () => {
  const {price, setPrice} = useContext(PropertyContext)
  const [isOpen, setisOpen] = useState(false)

  const prices = [
    {
      'value': 'Price range(any)'
    },
    {
      'value': '$500 - $2500'
    },
    {
      'value':'$2500 - $5000'
    },
    {
      'value' : '$5000 - $7500'
    },
    {
      'value' : '$7500 above'
    },
  ]
  


  return (
    <Menu as='div' className="dropdown relative">
    <Menu.Button onClick={() => setisOpen(!isOpen)} className="w-full text-left ">
    <div className='text-slate-400 text-[15px] font-medium leading-tight space-y-4'>
         Price
        </div>
        <div className=' font-bold flex items-center text-lg lg:text-[15px] justify-between'>
          {price}
          <div className='rounded-full bg-purple-400/20 p-1 '>
           <FaAngleDown className='dropdown-icon-primary'/>
          </div>
     
        </div>
      
    </Menu.Button>
    <Menu.Items className="dropdown-menu translate-y-10">
      {prices.map((price, index) => (
        <Menu.Item key={index}>
          {({ active }) => (
            <li
              onClick={() => {
                setPrice(price.value);
                setisOpen(false);
              }}
              className={`cursor-pointer text-violet-700 transition ${
                active ? 'bg-violet-100' : ''
              }`}
            >
              {price.value}
            </li>
          )}
        </Menu.Item>
      ))}
    </Menu.Items>
  </Menu>
  )
}

export default React.memo(PriceRange)