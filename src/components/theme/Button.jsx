import React from "react"

const Button = ({ content }) => {
  return (
    <button className='bg-primary-lime-green px-7 py-3 rounded-full text-neutral-white text-xs bg-gradient-to-r from-primary-lime-green to-primary-bright-cyan hover:button-brightness mb-7 focus:outline-none focus:ring ring-green-400'>
      {content}
    </button>
  )
}

export default Button
