/* eslint-disable no-unused-vars */
import React from "react"; 

import { FaSearch } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import header1 from "../assets/pictures/home.jpg"

const Header = () => {

  return (
    <div className='py-3 px-10 sm:px-4 md:px-6 lg:px-6'>
        <div className="container mx-auto py-[5vh]">
            <div className="grid grid-cols-1 relative lg:grid-cols-2 gap-8 items-center">
                <div className="lg:w-[32rem] w-full flex flex-col space-y-6">
                    <div className="text-4xl md:text-5xl font-bold text-black lg:text-6xl">
                        We are <span className=' text-[#718355] '>Serious</span> For <span className='text-[#718355]'>Foods </span>
                        & <span className='text-[#538D22]'>Delivery .</span>
                    </div>
                    <div className="lg:text-xl text-black md:text-lg text-base">
                    JM-3 Vegetables is your go-to online marketplace for the freshest, farm-to-table vegetables. We are committed to delivering high-quality, locally-sourced produce straight to your doorstep. Our user-friendly platform allows you to browse a wide selection of seasonal and organic vegetables, customize your orders, and choose convenient delivery times. With  JM-3 Vegetables , eating healthy has never been easier or more accessible.
                    </div>
                    <div className="flex rounded-full py-2 px-4 justify-between items-center bg-white shadow-md ">
                        <div className="flex items-center">
                        <FaSearch size={22} className='cursor-pointer' />
                        <input type='text' placeholder='Search Vegetables Here...' className='text-black w-full border-none outline-none py-2 px-4'/>
                        </div>
                        <div className="h-10 w-10 relative bg-[#718355] rounded-full">
                        <FaSearch size={15} className='cursor-pointer text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
                        </div>
                    </div>
                    <div className="flex  gap-8 items-center">
                        <button className='bg-[#718355] active:scale-90 transition duration-500 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white'>
                            Explore Now
                        </button>
                        <div className="sm:flex  hidden gap-4 items-center">
                            <div className="h-14 w-14 shadow-md cursor-pointer relative bg-[#CFE1B9] rounded-full">
                            <FaPlay size={18} className=' cursor-pointer text-[#718355] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
                            </div>
                            <div className="lg:text-xl text-black md:text-lg text-base cursor-pointer "> Watch Now </div>
                        </div>
                    </div>
                </div>
                <img src={header1} alt='' className='h-[28rem] mx-auto justify-end'/>

            </div>
        </div>
    </div>
  )
}

export default Header