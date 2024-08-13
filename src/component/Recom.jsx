/* eslint-disable no-unused-vars */
import React from 'react'

import tomato from '../assets/pictures/tomato.jpg'
import ladiesfinger from '../assets/pictures/ladies-finger.png'
import beet from '../assets/pictures/beet.jpeg'
import carrot from '../assets/pictures/qgBAQc.jpg'
import beans from '../assets/pictures/green-beans.jpg'
import liks from '../assets/pictures/556-600x482.png'
import purple from '../assets/pictures/Purple-cabbage2.jpg'
import gabbage from '../assets/pictures/wp4159441.jpg'
import bigonion from '../assets/pictures/red_onion.jpg'
import cucumber from '../assets/pictures/cucumber.jpeg'
import eggplant from '../assets/pictures/eggplant.jpeg'
import spinash from '../assets/pictures/spinach.jpeg'
import garlic from '../assets/pictures/garlic.jpeg'
import chili from '../assets/pictures/MOGRI-GREEN.jpg'
import orabellpaper from '../assets/pictures/Orange-Bell-Peppers.jpg'
import potato from '../assets/pictures/pototo.jpeg'
import swweetpot from '../assets/pictures/OIP.jpg'
import batana from '../assets/pictures/batana.jpeg'
import wingedbean from '../assets/pictures/wingedbean.jpeg'
import bitter from '../assets/pictures/bittergourd.jpeg'


const Recom = () => {
  return (
    <div className='py-3 px-10 sm:px-4 md:px-6 lg:px-6'>
      <div className="container mx-auto py-[2vh]" >
        <div className="text-2xl md:text-3xl font-bold text-center text-black lg:text-4xl">
          Fresh <span className='text-[#245501]'>Vegetables</span>
        </div>
        <div className="grid py-6 gap-8 lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-2 grid-cols-1">
          <div className="food-card rounded bg-[#CFE1B9] flex flex-col cursor-pointer items-center p-5">
            <div className="relative mb-3">
              <img src={tomato} alt='' srcSet=''/>  
            </div>

            <button className='shadow-sm bottom-4 top-0 border-white text-white bg-[#718355] cursor-pointer items-center px-2 py-1 text-base font-bold  relative'>1 Kg = Rs.200
            </button>

            <div className="flex gap-4 items-center">
              <span className='text-xl text-center font-bold text-[#245501]'>tomato</span>
            </div>

            <button className="bg-[#143601] active:scale-90 transition duration-150 transform hover:shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">Add to cart</button>
          </div>
          <div className="food-card rounded bg-[#CFE1B9] flex flex-col cursor-pointer items-center p-5">
            <div className="relative mb-3 ">
              <img src={ladiesfinger} alt='' srcSet=''/>           
            </div>

            <button className='shadow-sm bottom-4 top-0 border-white text-white bg-[#718355] cursor-pointer items-center px-2 py-1 text-base font-bold  relative'>1 Kg = Rs.200
            </button>

            <div className="flex gap-4 items-center">
              <span className='text-xl text-center font-bold text-[#245501]'>Ladies Finger</span>
            </div>

            <button className="bg-[#143601] active:scale-90 transition duration-150 transform hover:shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">Add to cart</button>
          </div>
          <div className="food-card rounded bg-[#CFE1B9] flex flex-col cursor-pointer items-center p-5">
            <div className="relative mb-3">
              <img src={carrot} alt='' srcSet=''/>
             
            
            </div>
            <button className='shadow-sm bottom-4 top-0 border-white text-white bg-[#718355] cursor-pointer items-center px-2 py-1 text-base font-bold  relative'>1 Kg = Rs.200
            </button>

            <div className="flex gap-4 items-center">
              <span className='text-xl text-center font-bold text-[#245501]'>Carrot</span>
            </div>

            <button className="bg-[#143601] active:scale-90 transition duration-150 transform hover:shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">Add to cart</button>
          </div>
          <div className="food-card rounded bg-[#CFE1B9] flex flex-col cursor-pointer items-center p-5">
            <div className="relative mb-3">
              <img src={beans} alt='' srcSet=''/>
             
            
            </div>
            <button className='shadow-sm bottom-4 top-0 border-white text-white bg-[#718355] cursor-pointer items-center px-2 py-1 text-base font-bold  relative'>1 Kg = Rs.200
            </button>

            <div className="flex gap-4 items-center">
              <span className='text-xl text-center font-bold text-[#245501]'>Beans</span>
            </div>

            <button className="bg-[#143601] active:scale-90 transition duration-150 transform hover:shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">Add to cart</button>
          </div>
          <div className="food-card rounded bg-[#CFE1B9] flex flex-col cursor-pointer items-center p-5">
            <div className="relative mb-3">
              <img src={liks} alt='' srcSet=''/>
             
            
            </div>
            <button className='shadow-sm bottom-4 top-0 border-white text-white bg-[#718355] cursor-pointer items-center px-2 py-1 text-base font-bold  relative'>1 Kg = Rs.200
            </button>

            <div className="flex gap-4 items-center">
              <span className='text-xl text-center font-bold text-[#245501]'>Liks</span>
            </div>

            <button className="bg-[#143601] active:scale-90 transition duration-150 transform hover:shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">Add to cart</button>
          </div>
          <div className="food-card rounded bg-[#CFE1B9] flex flex-col cursor-pointer items-center p-5">
            <div className="relative mb-3">
              <img src={purple} alt='' srcSet=''/>
            
            
            </div>
            <button className='shadow-sm bottom-4 top-0 border-white text-white bg-[#718355] cursor-pointer items-center px-2 py-1 text-base font-bold  relative'>1 Kg = Rs.200
            </button>

            <div className="flex gap-4 items-center">
              <span className='text-xl text-center font-bold text-[#245501]'>Purple Garbbage</span>
            </div>

            <button className="bg-[#143601] active:scale-90 transition duration-150 transform hover:shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">Add to cart</button>
          </div>
          <div className="food-card rounded bg-[#CFE1B9] flex flex-col cursor-pointer items-center p-5">
            <div className="relative mb-3">
              <img src={gabbage} alt='' srcSet=''/>
            
            </div>
            <button className='shadow-sm bottom-4 top-0 border-white text-white bg-[#718355] cursor-pointer items-center px-2 py-1 text-base font-bold  relative'>1 Kg = Rs.200
            </button>

            <div className="flex gap-4 items-center">
              <span className='text-xl text-center font-bold text-[#245501]'>Garbbage</span>
            </div>

            <button className="bg-[#143601] active:scale-90 transition duration-150 transform hover:shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">Add to cart</button>
          </div>
          <div className="food-card rounded bg-[#CFE1B9] flex flex-col cursor-pointer items-center p-5">
            <div className="relative mb-3">
              <img src={bigonion} alt='' srcSet=''/>
              
            
            </div>
            <button className='shadow-sm bottom-4 top-0 border-white text-white bg-[#718355] cursor-pointer items-center px-2 py-1 text-base font-bold  relative'>1 Kg = Rs.200
            </button>

            <div className="flex gap-4 items-center">
              <span className='text-xl text-center font-bold text-[#245501]'>Onion</span>
            </div>

            <button className="bg-[#143601] active:scale-90 transition duration-150 transform hover:shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">Add to cart</button>
          </div>
          <div className="food-card rounded bg-[#CFE1B9] flex flex-col cursor-pointer items-center p-5">
            <div className="relative mb-3">
              <img src={beet} alt='' srcSet=''/>
            </div>
            <button className='shadow-sm bottom-4 top-0 border-white text-white bg-[#718355] cursor-pointer items-center px-2 py-1 text-base font-bold  relative'>1 Kg = Rs.200
            </button>

            <div className="flex gap-4 items-center">
              <span className='text-xl text-center font-bold text-[#245501]'>Beet root</span>
            </div>

            <button className="bg-[#143601] active:scale-90 transition duration-150 transform hover:shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">Add to cart</button>
          </div>
          <div className="food-card rounded bg-[#CFE1B9] flex flex-col cursor-pointer items-center p-5">
            <div className="relative mb-3">
              <img src={cucumber} alt='' srcSet=''/>
    
            </div>
            <button className='shadow-sm bottom-4 top-0 border-white text-white bg-[#718355] cursor-pointer items-center px-2 py-1 text-base font-bold  relative'>1 Kg = Rs.200
            </button>

            <div className="flex gap-4 items-center">
              <span className='text-xl text-center font-bold text-[#245501]'>Cucumber</span>
            </div>

            <button className="bg-[#143601] active:scale-90 transition duration-150 transform hover:shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">Add to cart</button>
          </div>
          <div className="food-card rounded bg-[#CFE1B9] flex flex-col cursor-pointer items-center p-5">
            <div className="relative mb-3">
              <img src={eggplant} alt='' srcSet=''/>
           
            </div>
            <button className='shadow-sm bottom-4 top-0 border-white text-white bg-[#718355] cursor-pointer items-center px-2 py-1 text-base font-bold  relative'>1 Kg = Rs.200
            </button>

            <div className="flex gap-4 items-center">
              <span className='text-xl text-center font-bold text-[#245501]'>Eggplant</span>
            </div>

            <button className="bg-[#143601] active:scale-90 transition duration-150 transform hover:shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">Add to cart</button>
          </div>
          <div className="food-card rounded bg-[#CFE1B9] flex flex-col cursor-pointer items-center p-5">
            <div className="relative mb-3">
              <img src={spinash} alt='' srcSet=''/>
             
            
            </div>
            <button className='shadow-sm bottom-4 top-0 border-white text-white bg-[#718355] cursor-pointer items-center px-2 py-1 text-base font-bold  relative'>1 Kg = Rs.200
            </button>

            <div className="flex gap-4 items-center">
              <span className='text-xl text-center font-bold text-[#245501]'>Spinach</span>
            </div>

            <button className="bg-[#143601] active:scale-90 transition duration-150 transform hover:shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">Add to cart</button>
          </div>
          <div className="food-card rounded bg-[#CFE1B9] flex flex-col cursor-pointer items-center p-5">
            <div className="relative mb-3">
              <img src={garlic} alt='' srcSet=''/>
             
            
            </div>
            <button className='shadow-sm bottom-4 top-0 border-white text-white bg-[#718355] cursor-pointer items-center px-2 py-1 text-base font-bold  relative'>1 Kg = Rs.200
            </button>

            <div className="flex gap-4 items-center">
              <span className='text-xl text-center font-bold text-[#245501]'>Garlic</span>
            </div>

            <button className="bg-[#143601] active:scale-90 transition duration-150 transform hover:shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">Add to cart</button>
          </div>
          <div className="food-card rounded bg-[#CFE1B9] flex flex-col cursor-pointer items-center p-5">
            <div className="relative mb-3">
              <img src={chili} alt='' srcSet=''/>
             
            
            </div>
            <button className='shadow-sm bottom-4 top-0 border-white text-white bg-[#718355] cursor-pointer items-center px-2 py-1 text-base font-bold  relative'>1 Kg = Rs.200
            </button>

            <div className="flex gap-4 items-center">
              <span className='text-xl text-center font-bold text-[#245501]'>Chilli</span>
            </div>

            <button className="bg-[#143601] active:scale-90 transition duration-150 transform hover:shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">Add to cart</button>
          </div>
          <div className="food-card rounded bg-[#CFE1B9] flex flex-col cursor-pointer items-center p-5">
            <div className="relative mb-3">
              <img src={orabellpaper} alt='' srcSet=''/>
             
            
            </div>
            <button className='shadow-sm bottom-4 top-0 border-white text-white bg-[#718355] cursor-pointer items-center px-2 py-1 text-base font-bold  relative'>1 Kg = Rs.200
            </button>

            <div className="flex gap-4 items-center">
              <span className='text-xl text-center font-bold text-[#245501]'>Orange Bell Paper</span>
            </div>

            <button className="bg-[#143601] active:scale-90 transition duration-150 transform hover:shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">Add to cart</button>
          </div>
          <div className="food-card rounded bg-[#CFE1B9] flex flex-col cursor-pointer items-center p-5">
            <div className="relative mb-3">
              <img src={potato} alt='' srcSet=''/>
             
            
            </div>
            <button className='shadow-sm bottom-4 top-0 border-white text-white bg-[#718355] cursor-pointer items-center px-2 py-1 text-base font-bold  relative'>1 Kg = Rs.200
            </button>

            <div className="flex gap-4 items-center">
              <span className='text-xl text-center font-bold text-[#245501]'>Potato</span>
            </div>

            <button className="bg-[#143601] active:scale-90 transition duration-150 transform hover:shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">Add to cart</button>
          </div>
          <div className="food-card rounded bg-[#CFE1B9] flex flex-col cursor-pointer items-center p-5">
            <div className="relative mb-3">
              <img src={swweetpot} alt='' srcSet=''/>
             
            
            </div>
            <button className='shadow-sm bottom-4 top-0 border-white text-white bg-[#718355] cursor-pointer items-center px-2 py-1 text-base font-bold  relative'>1 Kg = Rs.200
            </button>

            <div className="flex gap-4 items-center">
              <span className='text-xl text-center font-bold text-[#245501]'>Swweet potato</span>
            </div>

            <button className="bg-[#143601] active:scale-90 transition duration-150 transform hover:shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">Add to cart</button>
          </div>
          <div className="food-card rounded bg-[#CFE1B9] flex flex-col cursor-pointer items-center p-5">
            <div className="relative mb-3">
              <img src={batana} alt='' srcSet=''/>
             
            
            </div>
            <button className='shadow-sm bottom-4 top-0 border-white text-white bg-[#718355] cursor-pointer items-center px-2 py-1 text-base font-bold  relative'>1 Kg = Rs.200
            </button>

            <div className="flex gap-4 items-center">
              <span className='text-xl text-center font-bold text-[#245501]'>Batana</span>
            </div>

            <button className="bg-[#143601] active:scale-90 transition duration-150 transform hover:shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">Add to cart</button>
          </div>
          <div className="food-card rounded bg-[#CFE1B9] flex flex-col cursor-pointer items-center p-5">
            <div className="relative mb-3">
              <img src={wingedbean} alt='' srcSet=''/>
             
            
            </div>
            <button className='shadow-sm bottom-4 top-0 border-white text-white bg-[#718355] cursor-pointer items-center px-2 py-1 text-base font-bold  relative'>1 Kg = Rs.200
            </button>

            <div className="flex gap-4 items-center">
              <span className='text-xl text-center font-bold text-[#245501]'>Winged Bean</span>
            </div>

            <button className="bg-[#143601] active:scale-90 transition duration-150 transform hover:shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">Add to cart</button>
          </div>
          <div className="food-card rounded bg-[#CFE1B9] flex flex-col cursor-pointer items-center p-5">
            <div className="relative mb-3">
              <img src={bitter} alt='' srcSet=''/>
             
            
            </div>
            <button className='shadow-sm bottom-4 top-0 border-white text-white bg-[#718355] cursor-pointer items-center px-2 py-1 text-base font-bold  relative'>1 Kg = Rs.200
            </button>

            <div className="flex gap-4 items-center">
              <span className='text-xl text-center font-bold text-[#245501]'>Bitter Gourd</span>
            </div>

            <button className="bg-[#143601] active:scale-90 transition duration-150 transform hover:shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">Add to cart</button>
          </div>


        </div>
      </div>

    </div>
  )
}

export default Recom