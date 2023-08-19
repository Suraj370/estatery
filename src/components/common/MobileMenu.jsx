import { Disclosure } from '@headlessui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const MobileMenu = ({navigation, handleClick}) => {
  return (
    <>
       <Disclosure.Panel className="lg:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item, index) => (
                    <Link
                    key={item.name}
                    to={item.link}
                    className={classNames(
                      item.current ? 'bg-purple-400/20 text-violet-600' 
                                    : 'text-gray-800 hover:bg-purple-400/20 hover:text-violet-300',
                      'block rounded-md px-3 py-2 text-sm font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                    onClick={() => handleClick(index)}
                  >
                    {item.name}
                  </Link>
                  ))}
                  </div>
                  <div className="border-t border-purple-200 pb-3 pt-4 ml-2 mr-2">
                  <div className="mt-3 space-y-1 px-2 flex gap-2 ">
                    <Link to="/login">
                        <button className="rounded-[8px] border text-violet-600 px-[20px] py-[8px] text-richblack-100">
                          Log in
                        </button>
                    </Link>
                    <Link to="/signup">
                        <button className="rounded-[8px] border bg-violet-600 text-white px-[20px] py-[8px] text-richblack-100">
                          Sign up
                        </button>
                    </Link>

                  </div>
                  </div>
                 
              </Disclosure.Panel>
    </>
  )
}

export default MobileMenu