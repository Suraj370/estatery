import React, {useState, useEffect, useContext} from 'react'

import { Menu } from '@headlessui/react'
import { PropertyContext } from '../../../../Context'

const Location = () => {
  const {locations, setLocation, location} = useContext(PropertyContext)
  const [isOpen, setisOpen] = useState(false)
  


  return (
    <Menu as='div' className="dropdown relative">
    <Menu.Button onClick={() => setisOpen(!isOpen)} className="w-full text-left">
    <div className='text-slate-400 text-[15px] font-medium leading-tight space-y-4'>
          Location
        </div>
        <div className='text-bold text-lg lg:text-[15px] justify-between'>
          {location}
        </div>
    </Menu.Button>
    <Menu.Items className="dropdown-menu translate-y-10">
      {locations.map((location, index) => (
        <Menu.Item key={index}>
          {({ active }) => (
            <li
              onClick={() => {
                setLocation(location);
                setisOpen(false);
              }}
              className={`cursor-pointer text-violet-700 transition ${
                active ? 'bg-violet-100' : ''
              }`}
            >
              {location}
            </li>
          )}
        </Menu.Item>
      ))}
    </Menu.Items>
  </Menu>
  )
}

export default React.memo(Location)