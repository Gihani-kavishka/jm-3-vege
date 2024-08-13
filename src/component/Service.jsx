/* eslint-disable no-unused-vars */
import React from 'react'
import img from '../assets/pictures/delivery.jpeg'

const Service = () => {
  return (
    <div className='py-3 px-10 sm:px-4 lg:px-6'>
        <div className="container mx-auto py-[2vh]">
            <div className="grid grid-cols-1 relative lg:grid-cols-2 gap-8 items-center">
                <img src={img} alt='' className='h-[32rem] mx-auto justify-end'/>
            <div className="w-full md:w-[32rem] flex flex-col space-y-6">
                <div className="text-2xl md:text-3xl font-bold text-black lg:text-4xl">
                    We are <span className="text-[#245501]">more </span>than <span className="text-[#245501]">multiple </span>service.
                </div>
                <div className="lg:text-lg text-black md:text-base text-sm">
                Experience the convenience of fresh, farm-to-door vegetable delivery with our service. We handpick the highest quality, seasonal produce from local farms and deliver them directly to your doorstep. Whether you’re cooking for a family or stocking up on weekly essentials, our customizable subscription options make it easy to enjoy healthy, JM-3 vegetables, whenever you need them.
                </div>
                <div className="flex gap-8 items-center ">
                     <button className="bg-[#245501] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">About Us</button>
                </div>
            </div>
            </div>          
        </div>
    </div>
  )
}

export default Service