import React, {useState, useEffect, useContext} from 'react'

import { Menu } from '@headlessui/react'
import { PropertyContext } from '../../../../Context'
import { FaAngleDown } from 'react-icons/fa'

const HouseType = () => {
  const {propertyTypes, setPropertyType, propertyType} = useContext(PropertyContext)
  const [isOpen, setisOpen] = useState(false)

  


  return (
    <Menu as='div' className="dropdown relative">
    <Menu.Button onClick={() => setisOpen(!isOpen)} className="w-full text-left ">
    <div className='text-slate-400 text-[15px] font-medium leading-tight space-y-4'>
          Property Type
        </div>
        <div className=' font-bold flex items-center text-lg lg:text-[15px] justify-between'>
          {propertyType}
          <div className='rounded-full bg-purple-400/20 p-1 '>
           <FaAngleDown className='dropdown-icon-primary'/>
          </div>
     
        </div>
      
    </Menu.Button>
    <Menu.Items className="dropdown-menu translate-y-10">
      {propertyTypes.map((propertyType, index) => (
        <Menu.Item key={index}>
          {({ active }) => (
            <li
              onClick={() => {
                setPropertyType(propertyType);
                setisOpen(false);
              }}
              className={`cursor-pointer text-violet-700 transition ${
                active ? 'bg-violet-100' : ''
              }`}
            >
              {propertyType}
            </li>
          )}
        </Menu.Item>
      ))}
    </Menu.Items>
  </Menu>
  )
}

export default React.memo(HouseType)