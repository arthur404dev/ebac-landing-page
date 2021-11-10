import React from "react"
import Navbar from "../components/layout/Navbar"
import Hero from "../components/layout/Hero"
import Footer from "../components/layout/Footer"

const Landing = () => {
  return (
    <>
      {/* Cabeçalho */}
      <Navbar />
      <div className='relative overflow-hidden'>
        <div className='hidden lg:block w-full h-full absolute'>
          <div className='bg-image-mockups absolute z-20 w-full h-full bg-no-repeat bg-auto bg-right-top -right-72 xl:-right-28'></div>
        </div>
        <Hero />
      </div>
      {/* Footer */}
      <Footer />
    </>
  )
}

export default Landing
