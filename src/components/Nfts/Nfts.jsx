import React from 'react'
import catImg from "../../assets/pic-nft.png";
import "./nft.css"


function Nfts() {
    return <>
        {/* <section className='h-[908px] bg-[url("./assets/cat.png")]'>
  
        </section> */}

        <div className='container mx-auto text-white my-20'>
            <div className='xl:grid grid-cols-2 '>
                <div className='content xl:max-w-[636px]'>
                    <h3 className='font-garmani md:text-[63px] text-[34px] font-normal leading-[74px]'>
                        A community focused NFTs
                    </h3>
                    <p className='font-inter mt-4 text-[20px] mb-[37px]'>You could win $100,000!</p>
                    <div className='mint-nft border-2 border-[#E4A841] rounded-2xl py-[57px] px-[40px]'>
                        <h4 className='text-center font-garmani md:text-[61px] text-[34px] font-normal leading-[50px]'>Mint NFT</h4>
                        <h5 className='text-center mt-[5px] font-inter md:text-[26px] text-[20px] font-normal leading-[42px]'>10,000 NFTs</h5>

                        <form className='mt-[38px]'>
                            <div className='form-control'>
                                <input className='border-b-4 border-[#373737] w-full bg-transparent placeholder:text-white leading-[42px] text-[26px] focus:outline-none pb-8' type='text' placeholder='Balance'/>
                            </div>
                            <div className='main-quantity-box mt-12 flex border-b-4 border-[#373737] sm:pb-8 pb-4 items-center justify-between	'>
                                <div className='form-control '>
                                    <input className='w-32 bg-transparent placeholder:text-white leading-[42px] sm:text-[26px] text-base focus:outline-none ' type='text' placeholder='Amount'/>
                                </div>
                                <div className='quantity flex items-center'>
                                    <span className='text-[65px] leading-[97px] mr-12'>-</span>
                                    <span className='text-[65px] leading-[97px] mr-12'>2</span>
                                    <span className='text-[65px] leading-[97px] '>+</span>
                                </div>
                                <button className='max-button font-semibold	text-[33px] rounded-[10px] bg-white text-black py-[9px] px-[31px] leading-[49px]'>Max</button>
                                
                            </div>
                            <div className=''>
                                <button className='md:text-[30px] text-[20px] mt-[50px] mb-[15px] font-bold bg-[#E4A841] w-full py-[19px] leading-[54px] rounded-xl'>Available</button>
                            </div>
                            <a className="text-center text-[#A8A8A8] underline block" href='{#}'>Make sure your MetaMask wallet is connected</a>
                        </form>
                    </div>
                </div>
                <figure className='img-section xl:my-auto mt-28'>
                    <img className='ml-auto' src={catImg}/>
                </figure>
            </div>
        </div>
    </>;
}

export default Nfts