import React from 'react'/* eslint-disable no-unused-vars */
import logo from "../assets/pictures/JM-312.png"
import { IoLogoFacebook } from "react-icons/io5";
import { FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-[#E9F5DB]/80 text-base-content p-8">
  <aside>
    <img src={logo} className='h-20'/>
    <p>
     JM-3 Vegetables since 2015
    </p>
  </aside>
  <nav>
    <h6 className="footer-title text-[#245501]">Services</h6>
    <a className="link link-hover">Special Offers</a>
    <a className="link link-hover">Organic Options</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title text-[#245501]">Socials</h6>
    <a className="link link-hover"><IoLogoFacebook size={30} /></a>
    <a className="link link-hover"><FiInstagram size={30}  /></a>
    <a className="link link-hover"><FaWhatsapp size={30}  /></a>
    
  </nav>
  <nav>
    <h6 className="footer-title text-[#245501]">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
  )
}

export default Footer