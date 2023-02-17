/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import cheeseburger from '../assets/cheeseburger.jpg'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* Card */}
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Holm Jam Burger</p>
                <p className='px-2'>Through 7/24</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 font-semibold'>Sipariş Ver!</button>
            </div>
            <img className='max-h[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={cheeseburger}/>
        </div>
        {/* Card */}
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Holm Drilled Burger</p>
                <p className='px-2'>Through 7/24</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 font-semibold'>Sipariş Ver!</button>
            </div>
            <img className='max-h[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=1600"/>
        </div>
        {/* Card */}
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Holm Egg Burger</p>
                <p className='px-2'>Through 7/24</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 font-semibold'>Sipariş Ver!</button>
            </div>
            <img className='max-h[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1600"/>
        </div>
    </div>
  )
}

export default HeadlineCards