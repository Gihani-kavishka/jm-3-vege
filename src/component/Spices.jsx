/* eslint-disable no-unused-vars */
import React from 'react'
import chilipowder from '../assets/spices/spices-in-sri-lanka-chilli-powder-new-version.jpg'
import chilipieces from '../assets/spices/kli miris.jpg'
import currypowder from '../assets/spices/roasted-curry-powder-sri-lanka.jpg'
import black from '../assets/spices/wijaya_product_black.jpg'
import mascurry from '../assets/spices/mas curry.jpg'
import turmeric from '../assets/spices/wijaya_product_1559713338.jpg'
import mustard from '../assets/spices/mustard-powder.jpg'
import jaffna from '../assets/spices/jaffna.jpg'
import masala from '../assets/spices/biriyani-masala.png'
import cummin from '../assets/spices/Cummin-100g.jpg'

const Spices = () => {
  return (
    <div className='py-3 px-10 sm:px-4 md:px-6 lg:px-6'>
    <div className="container mx-auto py-[2vh]" >
      <div className="text-2xl md:text-3xl font-bold text-center text-black lg:text-4xl">
        Quality <span className='text-[#245501]'>Spices</span>
      </div>
      <div className="grid py-6 gap-8 lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-2 grid-cols-1">

        <div className="spice-card rounded bg-[#CFE1B9] flex flex-col cursor-pointer items-center p-5">
          <div className="relative mb-3 ">
            <img src={chilipowder} alt='' srcSet=''/>  
          </div>

          <button className='shadow-sm bottom-4 top-0 border-white text-white bg-[#718355] cursor-pointer items-center px-2 py-1 text-base font-bold  relative'>1 Kg = Rs.200
          </button>

          <div className="flex gap-4 items-center">
            <span className='text-xl text-center font-bold text-[#245501]'>Chilli powder</span>
          </div>

          <button className="bg-[#143601] active:scale-90 transition duration-150 transform hover:shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">Add to cart</button>
        </div>
        <div className="spice-card rounded bg-[#CFE1B9] flex flex-col cursor-pointer items-center p-5">
          <div className="relative mb-3">
            <img src={chilipieces} alt='' srcSet=''/>
           
          
          </div>
          <button className='shadow-sm bottom-4 top-0 border-white text-white bg-[#718355] cursor-pointer items-center px-2 py-1 text-base font-bold  relative'>1 Kg = Rs.200
          </button>

          <div className="flex gap-4 items-center">
            <span className='text-xl text-center font-bold text-[#245501]'>Chilli pieces</span>
          </div>

          <button className="bg-[#143601] active:scale-90 transition duration-150 transform hover:shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">Add to cart</button>
        </div>
        <div className="spice-card rounded bg-[#CFE1B9] flex flex-col cursor-pointer items-center p-5">
          <div className="relative mb-3">
            <img src={currypowder} alt='' srcSet=''/>  
          </div>

          <button className='shadow-sm bottom-4 top-0 border-white text-white bg-[#718355] cursor-pointer items-center px-2 py-1 text-base font-bold  relative'>1 Kg = Rs.200
          </button>

          <div className="flex gap-4 items-center">
            <span className='text-xl text-center font-bold text-[#245501]'>Curry powder</span>
          </div>

          <button className="bg-[#143601] active:scale-90 transition duration-150 transform hover:shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">Add to cart</button>
        </div>
        <div className="spice-card rounded bg-[#CFE1B9] flex flex-col cursor-pointer items-center p-5">
          <div className="relative mb-3">
            <img src={black} alt='' srcSet=''/>
           
          
          </div>
          <button className='shadow-sm bottom-4 top-0 border-white text-white bg-[#718355] cursor-pointer items-center px-2 py-1 text-base font-bold  relative'>1 Kg = Rs.200
          </button>

          <div className="flex gap-4 items-center">
            <span className='text-xl text-center font-bold text-[#245501]'>Black Paper</span>
          </div>

          <button className="bg-[#143601] active:scale-90 transition duration-150 transform hover:shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">Add to cart</button>
        </div>
        <div className="spice-card rounded bg-[#CFE1B9] flex flex-col cursor-pointer items-center p-5">
          <div className="relative mb-3">
            <img src={mascurry} alt='' srcSet=''/>  
          </div>

          <button className='shadow-sm bottom-4 top-0 border-white text-white bg-[#718355] cursor-pointer items-center px-2 py-1 text-base font-bold  relative'>1 Kg = Rs.200
          </button>

          <div className="flex gap-4 items-center">
            <span className='text-xl text-center font-bold text-[#245501]'>Meat curry powder</span>
          </div>

          <button className="bg-[#143601] active:scale-90 transition duration-150 transform hover:shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">Add to cart</button>
        </div>
        <div className="spice-card rounded bg-[#CFE1B9] flex flex-col cursor-pointer items-center p-5">
          <div className="relative mb-3">
            <img src={turmeric} alt='' srcSet=''/>
           
          
          </div>
          <button className='shadow-sm bottom-4 top-0 border-white text-white bg-[#718355] cursor-pointer items-center px-2 py-1 text-base font-bold  relative'>1 Kg = Rs.200
          </button>

          <div className="flex gap-4 items-center">
            <span className='text-xl text-center font-bold text-[#245501]'>Turmeric powder</span>
          </div>

          <button className="bg-[#143601] active:scale-90 transition duration-150 transform hover:shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">Add to cart</button>
        </div>
        <div className="spice-card rounded bg-[#CFE1B9] flex flex-col cursor-pointer items-center p-5">
          <div className="relative mb-3">
            <img src={mustard} alt='' srcSet=''/>  
          </div>

          <button className='shadow-sm bottom-4 top-0 border-white text-white bg-[#718355] cursor-pointer items-center px-2 py-1 text-base font-bold  relative'>1 Kg = Rs.200
          </button>

          <div className="flex gap-4 items-center">
            <span className='text-xl text-center font-bold text-[#245501]'>Mustard powder</span>
          </div>

          <button className="bg-[#143601] active:scale-90 transition duration-150 transform hover:shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">Add to cart</button>
        </div>
        <div className="spice-card rounded bg-[#CFE1B9] flex flex-col cursor-pointer items-center p-5">
          <div className="relative mb-3">
            <img src={jaffna} alt='' srcSet=''/>
           
          
          </div>
          <button className='shadow-sm bottom-4 top-0 border-white text-white bg-[#718355] cursor-pointer items-center px-2 py-1 text-base font-bold  relative'>1 Kg = Rs.200
          </button>

          <div className="flex gap-4 items-center">
            <span className='text-xl text-center font-bold text-[#245501]'>Jaffna Curry Powder</span>
          </div>

          <button className="bg-[#143601] active:scale-90 transition duration-150 transform hover:shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">Add to cart</button>
        </div>
        <div className="spice-card rounded bg-[#CFE1B9] flex flex-col cursor-pointer items-center p-5">
          <div className="relative mb-3">
            <img src={masala} alt='' srcSet=''/>  
          </div>

          <button className='shadow-sm bottom-4 top-0 border-white text-white bg-[#718355] cursor-pointer items-center px-2 py-1 text-base font-bold  relative'>1 Kg = Rs.200
          </button>

          <div className="flex gap-4 items-center">
            <span className='text-xl text-center font-bold text-[#245501]'>Biriyani Masala</span>
          </div>

          <button className="bg-[#143601] active:scale-90 transition duration-150 transform hover:shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">Add to cart</button>
        </div>
        <div className="spice-card rounded bg-[#CFE1B9] flex flex-col cursor-pointer items-center p-5">
          <div className="relative mb-3">
            <img src={cummin} alt='' srcSet=''/>
           
          
          </div>
          <button className='shadow-sm bottom-4 top-0 border-white text-white bg-[#718355] cursor-pointer items-center px-2 py-1 text-base font-bold  relative'>1 Kg = Rs.200
          </button>

          <div className="flex gap-4 items-center">
            <span className='text-xl text-center font-bold text-[#245501]'>Cummin Powder</span>
          </div>

          <button className="bg-[#143601] active:scale-90 transition duration-150 transform hover:shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">Add to cart</button>
        </div>




      </div>
    </div>

  </div>
  )
}

export default Spices