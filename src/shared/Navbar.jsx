import { useState } from 'react'
import logo from "../assets/pictures/JM-312.png"
import { RiMenuFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";


const Navbar = () => {
    const [nav,setNav]= useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className="bg-[#E9F5DB]/80 shadow-md fixed top-0 left-0 w-full z-40 ease-in duration-300 backdrop-blur-md">
      <div className='py-3 px-10 sm:px-4 md:px-6 lg:px-6 container mx-auto'>
        <div className=" flex items-center justify-between">
        <img src={logo} alt=''className='h-16 cursor-pointer'/>

        <div className="lg:flex hidden gap-8 items-center">
          <a href="" className="text-[#191919] text-xl font-medium hover:text-[#718355] ">Vegetables</a>
          <a href="" className="text-[#191919] text-xl font-medium hover:text-[#718355]">Fruits</a>
          <a href="" className="text-[#191919] text-xl font-medium hover:text-[#718355]">Spices</a>
          <a href="" className="text-[#191919] text-xl font-medium hover:text-[#718355]">Add items</a>
          <a href="" className="text-[#191919] text-xl font-medium hover:text-[#718355]">Contact Us</a>

          <button className='bg-[#CFE1B9] active:scale-90 transition duration-100 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium'>Login</button>
        </div>
        <div className="block lg:hidden z-40" onClick={handleNav}>
          {
            nav ? (<RxCross2 size={20} className='text-[#191919] cursor-pointer'/>):(<RiMenuFill className='text-[#718355] cursor-pointer' size={20}/>)
          }
        </div>

        <div className={`lg:hidden absolute w-1/2 sm:w-2/5 h-screen px-4 py-2 text-xl font-medium ease-in shadow-sm backdrop-blur-md bg-white/80 top-0 duration-500 ${nav ? "right-0":"right-[-100%]"} pt-24`}>
        <div className="flex flex-col gap-8 ">
          <a href="" className="text-[#191919] text-base font-medium hover:text-[#718355] ">Vegetables</a>
          <a href="" className="text-[#191919] text-base font-medium hover:text-[#718355]">Fruits</a>
          <a href="" className="text-[#191919] text-base font-medium hover:text-[#718355]">Spices</a>
          <a href="" className="text-[#191919] text-base font-medium hover:text-[#718355]">Add items</a>
          <a href="" className="text-[#191919] text-base font-medium hover:text-[#718355]">Contact Us</a>

          <button className='bg-[#CFE1B9] active:scale-90 transition duration-100 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium'>Login</button>
        </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Navbar