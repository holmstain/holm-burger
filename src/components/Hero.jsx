/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import burger from '../assets/burger.jpg'

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[ 500px] relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full text-gray-200 m-h-[500px] bg-black/40 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl ms:text-5xl md:text-6xl lg:text-7xl font-bold'>İki ekmek <span className='text-orange-500'>arası</span></h1>
                <h1 className='px-4 text-4xl ms:text-5xl md:text-6xl lg:text-7xl font-bold'>ziyafet<span className='text-orange-500'> verin</span></h1>
            </div>
            <img className='w-full max-h-[700px] object-cover' src={burger} />
        </div>
    </div>
  )
}

export default Hero