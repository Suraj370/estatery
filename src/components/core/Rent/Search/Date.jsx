import React, { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { Menu } from '@headlessui/react';

const Date = () => {
  const [isOpen, setisOpen] = useState(false);


  return (
    <Menu as='div' className="dropdown relative">
    <Menu.Button onClick={() => setisOpen(!isOpen)} className="w-full text-left ">
    <div className='text-slate-400 text-[15px] font-medium leading-tight space-y-4'>
          When
        </div>
        <div className=' font-bold flex items-center text-lg lg:text-[15px] justify-between'>
           Select Move-in-Date
          <div className='rounded-full bg-purple-400/20 p-1 '>
           <FaCalendarAlt className='dropdown-icon-primary'/>
          </div>
     
        </div>
      
    </Menu.Button>
    <Menu.Items className="dropdown-menu translate-y-10">
     
    </Menu.Items>
  </Menu>
  );
};

export default Date;