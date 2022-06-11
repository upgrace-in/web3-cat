import React from 'react'
import telegram from "../../assets/telegram.png";
import twitter from "../../assets/Twitter.svg";
import reddit from "../../assets/reddit.png";
import discord from "../../assets/discord.png";
import instagram from "../../assets/instagram.png";


function Footer() {
    return <>
        <footer className="text-gray-600 body-font py-3">
            <div className="container xl:px-5 px-2  py-8 mx-auto flex items-center lg:flex-row flex-col w-11/12  justify-between lg:space-y-0">
                <div className='order-3 lg:order-1 mt-7 md:mt-0' ><p className='text-gray-400 text-sm text-center'>Copyright @ 2022 Billionaire Cat. All Right Reserved</p></div>
                <div className='flex space-x-5 k agy lg:order-2 '>
                    <a href='https://t.me/billionairecatportal'> <ImageCom img={telegram} /></a>
                    <a href='https://twitter.com/billionairecatt'><ImageCom img={twitter} /></a>
                    <a href='https://instagram.com/billionairecat.io?r=nametag'><ImageCom img={instagram} /></a>
                    <a href='#'><ImageCom href="#" img={reddit} /></a>
                    <a href='#'> <ImageCom img={discord} /></a>
                </div>
                <div className='space-x-10 text-gray-300 text-sm mt-10 md:mt-0 lg:order-3 '>
                    <a href="#">Terms of Use</a>
                    <a href="#">Privacy Policy</a>
                </div>
            </div>
        </footer>
    </>
}
const ImageCom = ({ img }) => {
    return <img src={img} className="w-8" alt="" />;
}
export default Footer