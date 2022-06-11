import React from 'react'
import "./feature.css"
import featureImage from "../../assets/feature-img.png"
import featureImageMobile from "../../assets/mobile-cat.png";

function Feature() {
    return <>
        <section className='feature-div'>
            <h1 className='sm:pt-24 pt-14 feature-heading text-white w-10/12 m-auto text-center  text-[38px] sm:text-5xl font-garmani lg:text-[62px] font-medium leading-[88px]  wow slideInDown' data-wow-delay=".5s"><span className='heading-border'><hr /></span>  Features</h1>
            <div className='feature'>
                <div className='feature-text container'>
                    <div className='feature-point space-x-7 wow slideInLeft' data-wow-delay=".5s">
                        <div className='feature-circle primary-background'>
                            01
                        </div>
                        <div className='feature-point-text'>
                            <h1 className='font-garmani lg:text-[38px] text-[24px] font-normal leading-[28px]'>Minting Dapp</h1>
                            <p className='font-inter sm:leading-[38px] leading-[32px]  text-base sm:text-[24px] font-medium text-[#ffffffc9] mt-[18px]'>Mint billionaire’s cat mystery box and win a Tesla, Bitcoin and much more.</p>
                        </div>
                    </div>
                    <div className='feature-point space-x-7 lg:ml-20 ml-6 mt-[85px] wow slideInUp' data-wow-delay=".5s">
                        <div className='feature-circle primary-background'>
                            02
                        </div>
                        <div className='feature-point-text space-y-3'>
                            <h1 className='font-garmani lg:text-[38px] text-[24px] font-normal leading-[28px]'>Staking</h1>
                            <p className='font-inter sm:leading-[38px] text-base sm:text-[24px] leading-[32px]  font-medium text-[#ffffffc9] mt-[18px]'>Stake your $BCAT tokens to earn passive income.</p>
                        </div>
                    </div>
                    <div className='feature-point space-x-7 mt-[85px] wow slideInRight' data-wow-delay=".5s">
                        <div className='feature-circle primary-background'>
                            03
                        </div>
                        <div className='feature-point-text space-y-3'>
                            <h1 className='font-garmani lg:text-[38px] text-[24px] font-normal leading-[28px]'>Play to earn</h1>
                            <p className='font-inter sm:leading-[38px] text-base sm:text-[24px] leading-[32px]  font-medium text-[#ffffffc9] mt-[18px]'>Protect with a Gun in hand to save lives, stop crime and kill enemies. Play our game to earn $BCAT tokens, unique NFTs in rewards, trade in store or stake to earn passive income. Our mobile game will be coming soon on iOS and android.</p>
                        </div>
                    </div>
                </div>

                <div className='feature-img xl:mt-[100px] mt-[50px] lg:mt-0 wow slideInDown' data-wow-delay=".5s" >
                    <img className='featuer-desktop' src={featureImage} alt="" />
                    <img className='featue-mobile' src={featureImageMobile} alt="" />
                </div>
            </div>
            <div className=' max-w-[900px] mx-auto  mb-[100px] wow fadeInDown' data-wow-delay=".5s">
                <h3 className='text-center font-garmani lg:text-[38px] text-[24px] font-normal leading-[28px] text-white mb-5 mt-5'>CATOVERSE</h3>
                <p className='text[18px] font-normal text-[#ffffffc9] text-center leading-[31px]'>
                    Cat has a vision to build a virtual world called CATOVERSE where she can meet all family and friends and
                    do whatever they want, anyone who is close to billionaire cat are among the lucky family members are having a great chance to become billionaire and land of their own choice and
                    earn passive incoming by simply build, play and earn.
                </p>

            </div>
        </section>
    </>;
}

export default Feature