import React from "react"
import { BsBank2 } from "react-icons/bs"
import { navItems, socials } from "../../config/constants"
import Button from "../theme/Button"

const Footer = () => {
  return (
    <footer className='bg-primary-dark-blue py-10'>
      <div className='container'>
        <div className='text-center grid grid-cols-1 justify-items-center gap-6 lg:grid-cols-12 lg:gap-0'>
          {/* Marca e Sociais */}
          <div className='flex flex-col justify-between lg:justify-self-start lg:col-span-3'>
            {/* Logo */}
            <div className='flex'>
              <BsBank2
                className='text-xl mr-1 text-primary-lime-green'
                alt='ebanc logo'
              />
              <span className='text-md font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-lime-green to-primary-bright-cyan'>
                EBANC
              </span>
            </div>
            {/* Socials */}
            <div className='flex justify-between items-center'>
              {socials.map(({ title, icon }, index) => (
                <a
                  key={index}
                  className='text-white text-2xl mr-1 hover:text-green-400 fill-current cursor-pointer'
                  alt={title}
                  href='/#'
                >
                  {React.createElement(icon)}
                </a>
              ))}
            </div>
          </div>
          {/* Navegação */}
          <div className='grid grid-cols-1 gap-2 py-1 lg:grid-rows-3 text-white text-sm lg:text-left lg:justify-self-start lg:col-span-5 lg:gap-x-24 lg:grid-flow-col-dense'>
            {navItems.map((navItem, index) => (
              <a key={index} className='hover:text-green-400' href='/#'>
                {navItem}
              </a>
            ))}
          </div>
          {/* Call to Action */}
          <div className='flex flex-col justify-between items-center lg:items-end lg:justify-self-end lg:col-span-4'>
            <Button content='Call to Action' />

            <p className='text-neutral-grayish-blue text-sm'>
              © EBANC. Todos Direitos Reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
