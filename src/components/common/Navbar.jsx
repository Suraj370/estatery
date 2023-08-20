import React, {useState, Fragment} from 'react'
import logo from '../../assets/logo.png'
import { Disclosure} from '@headlessui/react'
import {Link} from "react-router-dom"
import { FaAngleDown } from 'react-icons/fa'
import { Bars3Icon,  XMarkIcon } from '@heroicons/react/24/outline'
import MobileMenu from './MobileMenu'

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const Navbar = () => {
    const [navigation, setNavigation] = useState([
        {id: 1, name: 'Rent', link: '/rent', current: true },
        {id: 2, name: 'Buy', link: '/buy', current: false },
        {id: 3, name: 'Sell', link: '/sell', current: false },
        {id: 4, name: 'Manage Property', link: '/manage', current: false },
        {id: 5, name: 'Resources', link: '/resources', current: false },
    ]);
 
    const handleClick = (index) => {

        const updatedNavigation = navigation.map((item, i) => ({
            ...item,
            current: i === index,
        }));
        setNavigation(updatedNavigation);
    };
  return (
    <div >
       <Disclosure as = "nav" className=" bg-slate-200/20">
        {({open}) => (
            <>
            <div className=' mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='flex h-16 items-center justify-between'>
                    <div className='flex items-center'>
                        <div className=' flex-shrink-0'>
                            <img src={logo} alt="" />
                        </div>
                        <div className='hidden lg:block'>
                            <div className='ml-10 flex flex-items-baseline items-center space-x-4'>
                                {navigation.map((item, index) =>(
                                      ( item.name == "Manage Property"|| item.name == "Resources")?(<>
                              
                                       <Link
                                      key={item.id}
                                      to={item.link}
                                      className={classNames(
                                        item.current
                                          ? ' bg-purple-400/20 text-violet-600'
                                          : 'text-gray-800 hover:bg-purple-400/20 hover:text-violet-300',
                                        'rounded-md px-3 py-2 text-sm font-medium',
                                        'group relative flex cursor-pointer items-center gap-1 '
                                      )}
                                      aria-current={item.current ? 'page' : undefined}
                                      onClick={() => handleClick(index)}
                                    
                                    >
                                      {item.name}
                                      <FaAngleDown/>
                                    </Link>
                     

                            </>):(<>
                                      <Link
                                      key={item.name}
                                      to={item.link}
                                      className={classNames(
                                        item.current
                                          ? ' bg-purple-400/20 text-violet-600'
                                          : 'text-gray-800 hover:bg-purple-400/20 hover:text-violet-300',
                                        'rounded-md px-3 py-2 text-sm font-medium'
                                      )}
                                      aria-current={item.current ? 'page' : undefined}
                                      onClick={() => handleClick(index)}
                                    >
                                      {item.name}
                                    </Link>
                                    
                                      </>)
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='hidden lg:flex gap-2'>
                      <Link to="/login">
                        <button className="rounded-[8px] border text-violet-600 px-[20px] py-[8px]">
                          Log in
                        </button>
                      </Link>

                      <Link to="/signup">
                        <button className="rounded-[8px] border bg-violet-600 text-white px-[20px] py-[8px] ">
                          Sign up
                        </button>
                      </Link>
                   </div>
                   <div className="-mr-2 flex lg:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md  p-2  focus:outline--none ">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
            </div>

              <MobileMenu navigation = {navigation} handleClick = {handleClick}/>
                
            </>
        )}
       </Disclosure>
    </div>
  )
}

export default Navbar