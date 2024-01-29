import React from 'react'
import Welcome from '../Welcome/Welcome'
import { hero } from '../../constants/image'

function Hero (): JSX.Element {
  return (
    <div className="relative w-screen h-[300px] md:h-[600px] overflow-hidden -mx-4">
      <div className="absolute w-full h-full z-10 grid items-center px-4 md:px-40">
        <Welcome />
      </div>
      <img
        className="h-full object-cover w-full bg-bottom brightness-50"
        src={hero}
        alt="hero"
      />
    </div>
  )
}

export default Hero
