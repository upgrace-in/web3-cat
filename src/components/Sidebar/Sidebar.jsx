import React from 'react'
import "./sidebar.css"
import { AiOutlineCloseCircle } from "react-icons/ai";
import {
    Link,
} from "react-router-dom";

function Sidebar({ toggleSidebar, setToggleSidebar }) {
    return <>
        <section className={`sidebar z-10 fixed top-0 right-0 p-3 w-[100%] md:w-[30vw] lg:w-[24vw] h-screen shadow-2xl  list-none flex flex-col justify-start items-end  white-glassmorphism ease-in  ${toggleSidebar && "show-sidebar"} ease-in`}>
            <AiOutlineCloseCircle className='absolute right-10 top-10 text-3xl cursor-pointer hover:text-gray-300 text-white' onClick={() => setToggleSidebar(!toggleSidebar)} />
            <nav className="flex flex-col w-[100%] mt-32 space-y-5 space-x-5 text-white">
                <Link to="/" className="sidebar-links mr-5 hover:text-gray-300 ml-5  w-[100%] h-fit   ">Home</Link>
                <a onClick={() => setToggleSidebar(!toggleSidebar)} href ="#audit-section" className="sidebar-links mr-5 hover:text-gray-300 w-[100%] h-fit  ">Audit</a>
                <a onClick={() => setToggleSidebar(!toggleSidebar)} href ="#roadmap-section" className="sidebar-links mr-5 hover:text-gray-300 w-[100%] h-fit  ">Roadmap</a>
                <a onClick={() => setToggleSidebar(!toggleSidebar)} href ="#tokenomics-section" className="sidebar-links mr-5 hover:text-gray-300 w-[100%] h-fit  ">Tokenomics</a>
                <a onClick={() => setToggleSidebar(!toggleSidebar)} href ="#team-section" className="sidebar-links mr-5 hover:text-gray-300 w-[100%] h-fit  ">Team</a>
                <a onClick={() => setToggleSidebar(!toggleSidebar)} href ="#whitepaper-section" className="sidebar-links mr-5 hover:text-gray-300 w-[100%] h-fit  ">Whitepaper</a>
                <div className='space-x-3 flex flex-col space-y-4'>
                    <Link to="/cat-mint" className="h-button-1 px-12 ml-3 w-fit text-white inline-flex items-center  border-0 py-2  focus:outline-none  rounded text-base mt-4 md:mt-0"onClick={() => setToggleSidebar(!toggleSidebar)} style={{ borderRadius: "100px" }}>MINT
                    </Link>
                    <Link to="/stalking" className="h-button-2 px-8 inline-flex w-fit items-center  border-0 py-2  focus:outline-none text-white rounded text-base mt-4 md:mt-0"onClick={() => setToggleSidebar(!toggleSidebar)}>STAKING
                    </Link>
                </div>

            </nav>
        </section>
    </>;
}

export default Sidebar