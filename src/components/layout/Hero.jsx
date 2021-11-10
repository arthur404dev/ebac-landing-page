import React from "react"
import Button from "../theme/Button"

const Hero = () => {
  return (
    <section id='hero' className='relative'>
      <div className='bg-header-mobile bg-custom-mobile-header-size absolute w-full h-full bg-no-repeat lg:hidden'></div>
      <div className='bg-header-desktop absolute w-full h-full bg-no-repeat hidden lg:block bg-left -right-42.6%'></div>
      <div className='bg-image-mockups absolute z-20 w-full h-full bg-no-repeat bg-top -top-12 md:-top-16 bg-custom-mobile-mockup-size lg:hidden'></div>
      <div className='container h-screen relative z-20'>
        <div className='h-full flex flex-col justify-end pb-4 lg:pb-0 lg:w-96 lg:justify-center'>
          <div className='h-1/2 flex flex-col justify-center items-center text-center lg:items-start lg:text-left'>
            <h1 className='text-4xl lg:text-5xl text-primary-dark-blue pb-5'>
              Muito obrigado pela presença de todos!
            </h1>
            <p className='text-neutral-grayish-blue text-xs lg:text-base leading-5 mb-7'>
              Transforme sua vida adquirindo um curso de programação com a EBAC,
              e abra seu próprio banco no futuro!
            </p>
            <Button content='Vocês são demais!'></Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
