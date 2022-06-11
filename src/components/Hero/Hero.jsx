import React from 'react'
import "./hero.css"
import cat_side from '../../assets/cat-side.png';
import heroSofa from "../../assets/hero-sofa.png";
import sofaBackground from "../../assets/hero-sofa-back.png";
import sofaBorder from "../../assets/hero-sofa-border.png";
import catImage_1 from "../../assets/cat-image-1.png";
import catImage_2 from "../../assets/cat-image-2.png";
import catImage_3 from "../../assets/cat-image-3.png";
import heroSideImage from "../../assets/hero-side-img.png";
import telegram from "../../assets/telegram.png";
import twitter from "../../assets/twitter.png";
import discord from "../../assets/discord.png";
import { Star } from '../../assets/images';

function Hero() {
    return <>
        <section className=' xl:bg-[url("./assets/cat.png")] bg-[url("./assets/cat-mobile.png")] mt-[0] md:mt-[-108px]  pt-[250px]  md:bg-auto bg-right-top bg-top-right bg-no-repeat bg-[length:600px_600px]'>
            <div className=''>
                <div className='container mx-auto'>
                    <div className='grid  grid-cols-1 xl:grid-cols-2'>
                        <div className='xl:pt-[80px]'>
                            <h1 className='font-garmani text-normal leading-[50px] text-white md:text-[38px] text-[32px] xl:text-[50px] mb-8'>
                                Welcome to Billionaire Cat
                            </h1>
                            <div className='flex items-start gap-6'>
                                <div className='h-[3px] w-[85px] xl:w-[116px] bg-white  mt-[35px]'></div>
                                <h1 className='max-w-[447px] xl:max-w-[543px] font-garmani text-normal leading-[35px] sm:leading-[68px] text-white text-[28px] xl:text-[50px] md:text-[42px]'>
                                    100% community focused most hyped Cat of 2022
                                </h1>
                            </div>

                        </div>
                        <div className='flex flex-col md:flex-row xl:flex-col gap-6 items-start md:items-end  mt-[50px] sm:mt-[100px] md:mt-[300px] xl:mt-0'>
                            <div>
                                <img src={cat_side} className='xl:mr-[40px]' alt="" />
                            </div>
                            <div>
                                <p className='font-inter text-base sm:text-xl text-white font-normal max-w-[453px] mt-[36px] xl:ml-auto'>Billionaire Cat is a community focused, decentralized cryptocurrency, we aim to become the latest cat on the block. Billionaire Cat - created for people that love Cats and want to become Billionaires. Unlike other meme tokens such as Doge, our community is developing genuine use-case. We truly believe BILLIONAIRE CAT token is an extremely unique community. What really separates $BCAT Token from the rest of the meme tokens? Well, our mission is to create unique NFT Mystery boxes of Billionaire Cat and win huge prizes!! It’s unique only because of the extraordinary people turning our ideas into reality. We’re on a serious mission to make a difference. We hope you join us!
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

                <section className='hero-social md:mt-60 mt-20' >
                    <div className='container mx-auto'>
                        <div className='grid xl:grid-cols-[700px_1fr] md:grid-cols-[1fr_1fr] grid-cols-1'>
                            <div className='hero-social-text pb-10 wow slideInLeft'  data-wow-delay=".5s">
                                <div className=''><Star /></div>
                                <h1 className='text-[62px] font-garmani font-normal  max-w-[572px]'>Become part of billionaire cat's family.</h1>
                            </div>
                            <div className='hero-social-link space-y-4 pl-[50px]  wow slideInRight' data-wow-delay=".5s" >
                                <ul className='hero-list text-base sm:text-[22px] text-inter'>
                                    <li>Meet Our Community</li>
                                    <li>Stay tuned with roadmap updates</li>
                                    <li>sneak peak of upcoming product</li>
                                </ul>
                                <div className='hero-btn gap-4 -ml-3 pb-10 pt-5'>
                                    <a href="https://t.me/billionairecatportal" target="_blank" className='hero-telegram-btn whitespace-nowrap'>
                                        Join Telegram
                                        <img src={telegram} alt="" />
                                    </a>
                                    <a href="#" target="_blank" className='hero-discord-btn whitespace-nowrap'>
                                        Join Discord
                                        <img src={discord} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>

                </section>
                <section className='cat-images' >
                    <div className=' wow slideInLeft' data-wow-delay=".5s">
                        <img src={catImage_1} alt="img" />
                    </div>
                    <div className=' wow slideInUp'  data-wow-delay=".5s">
                        <img src={catImage_2} alt="img" />
                    </div>
                    <div className='wow slideInRight'  data-wow-delay=".5s">
                        <img src={catImage_3} alt="img" />
                    </div>
                </section>
            </div>

        </section>
    </>;
}




export default Hero