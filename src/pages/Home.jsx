/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../component/header'
import Recom from '../component/Recom'
import Service from '../component/Service'
import Spices from '../component/spices'
import Footer from '../shared/Footer'


const Home = () => {
  return (
    <div>
        <Header/>
        <Recom />
        <Service />
        <Spices />
        <Footer />


    </div>
  )
}

export default Home