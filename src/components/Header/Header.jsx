import React from 'react'
import "./header.css";
import logo from "../../assets/logo.png";
import { GoThreeBars } from "react-icons/go";
import { Hamburger } from '../../assets/images.jsx';
import whitepaper from "../../assets/pdf/BillionaireCat_Whitepaper.pdf";
import audit from "../../assets/pdf/BillionaireCat_Audit.pdf";
import {
  Link,
} from "react-router-dom";

function Header({ toggleSidebar, setToggleSidebar }) {

  return <>
    <header className="text-gray-600 ">
      <div className="container mx-auto flex flex-wrap py-5 justify-between items-center">
        <Link to='/' onClick={() => setToggleSidebar(!toggleSidebar)} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <h3 className='text-white font-garmani md:text-[38px] text-[28px] sm:text-[34px] font-normal'></h3>
        </Link>
        <nav className="navLinks  md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center space-x-7 text-white font-medium  hide-bar font-montserrat">
          <Link to='/' onClick={() => setToggleSidebar(!toggleSidebar)} className="mr-5 hover:text-gray-300 text-lg text-white">Home</Link>
          <a href={audit} target="_blank" className="mr-5 hover:text-gray-300 text-lg text-white">Audit</a>
          <a href="#roadmap-section" className="mr-5 hover:text-gray-300 text-lg text-white">Roadmap</a>
          <a href="#tokenomics-section" className="mr-5 hover:text-gray-300 text-lg text-white">Tokenomics</a>
          <a href="#team-section" className="mr-5 hover:text-gray-300 text-lg text-white">Team</a>
          <a href={whitepaper} target="_blank" className="mr-5 hover:text-gray-300 text-lg text-white">Whitepaper</a>
        </nav>
        <div className='space-x-3 hide-bar'>
          <Link to="/cat-mint" id='mint_link_id' className="h-button-1 px-8 text-white inline-flex items-center text-xl  border-0 py-2  focus:outline-none  rounded  mt-4 md:mt-0">MINT
          </Link>
          <Link to="/stalking" className="h-button-2 px-8 inline-flex items-center  border-0 py-2  text-xl focus:outline-none text-white rounded  mt-4 md:mt-0">STAKING
          </Link>
        </div>
        <div>
          <div className='text-white show-bar mb-3 cursor-pointer hover:text-gray-300' onClick={() => setToggleSidebar(!toggleSidebar)}>
            <Hamburger />
          </div>
        </div>
      </div>
    </header>
  </>;
}

export default Header