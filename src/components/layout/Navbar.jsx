import React, { useState } from "react"
import { BsBank2 } from "react-icons/bs"
import { ImMenu } from "react-icons/im"
import { RiCloseFill } from "react-icons/ri"
import { navItems } from "../../config/constants"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div className='fixed z-50 top-0 w-full bg-white'>
        <nav className='container flex justify-between items-center z-20'>
          <div className='my-5 lg:my-6 flex items-center'>
            <BsBank2 className='text-xl mr-1 text-primary-lime-green' />
            <span className='text-md font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-lime-green to-primary-bright-cyan'>
              EBANC
            </span>
          </div>

          {/* Links */}
          <div className='hidden lg:block text-sm text-neutral-grayish-blue'>
            {navItems.map((navItem, index) => (
              <a
                href='/#'
                key={index}
                className='mx-3 py-5 hover:gradient-border-bottom'
              >
                {navItem}
              </a>
            ))}
          </div>

          <button className='hidden lg:block bg-primary-lime-green px-7 py-3 rounded-full  text-neutral-white text-xs bg-gradient-to-r from-primary-lime-green to-primary-bright-cyan hover:button-brightness focus:outline-none focus:ring ring-green-400'>
            Call to Action
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className='lg:hidden focus:outline-none'
          >
            <ImMenu className={`${isOpen && "hidden"}`} />
            <RiCloseFill
              className={`text-2xl font-bold ${isOpen ? "block" : "hidden"}`}
              alt=''
            />
          </button>
        </nav>
      </div>

      {/* Modal */}
      <div
        className={`fixed inset-0 z-30 bg-gray-800 bg-opacity-50 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className='bg-white text-primary-dark-blue flex flex-col text-center mx-5 my-20 py-4 rounded'>
          {navItems.map((navItem, index) => (
            <a key={index} className='py-2' href='/#'>
              {navItem}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}

export default Navbar
