import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import Search from '../components/core/Rent/Search';
import HouseList from '../components/core/Rent/HouseList';

const Rent = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
      
      <div className=' mx-auto  max-w-6xl px-4 font-rubik sm:px-6 lg:px-8 flex flex-col space-y-4'>
          <div className='flex items-center justify-between  '>
            <h1 className='font-semibold text-4xl'>Search properties to rent</h1>
            <button
              className="rounded-[8px] border bg-white/80 text-slate-500 font-medium px-[20px] py-[8px] text-sm
                        flex gap-2 items-center"
              onClick={toggleSearch}
            >
              <p>Search with Search Bar</p>
              <div className='rounded-full bg-purple-400/20 p-1 '>
                <FaAngleDown size={15} />
              </div>
            </button>
          </div>
          <div className={` transition-all duration-700 ${searchOpen ? 'opacity-100 max-h-[500px]' : 'opacity-0 max-h-0 '}` }>
            <Search />
          </div>
          <HouseList/>
    </div>
   
  );
};

export default Rent;
