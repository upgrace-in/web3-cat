import React from 'react'
import './roadmap.css';
import { BsFillHexagonFill } from "react-icons/bs";

function Roadmap() {
    return <>
        <section className=' w-100 flex items-center relative roadmap-parent-div sm:py-[156px] py-[56px]'id="roadmap-section" >
            {/* <div className='backLine'></div> */}
            <section className='roadmap container'>
                <h1 className='absolute sm:top-[10%] top-[5%] pt-3 roadmap-heading text-white text-5xl w-fit text-center  lg:text-[62px] text-[38px] font-normal leading-[88px] font-garmani wow fadeInLeft' data-wow-delay=".5s"><span className='heading-border'><hr /></span> Roadmap</h1>
                <div className="raodmap-phase ">
                    <div className="raodmap-num flex items-center justify-center flex-col ">
                        <div className="phase1 wow fadeInLeft" data-wow-delay=".5s">Phase 1</div>
                        <div className="phase2 wow fadeInRight" data-wow-delay=".5s">Phase 2</div>
                        <div className="phase3 wow fadeInUp" data-wow-delay=".5s">Phase 3</div>
                        <div className="phase4 wow fadeInDown" data-wow-delay=".5s">Phase 4</div>
                        <div className="phase5 wow fadeInLeft" data-wow-delay=".5s">Phase 5</div>
                    </div>
                    <div className="py-32 -ml-10 w-fit space-y-6">
                        <div className="roadmap-box pr-40 pl-4 sm:pl-10 py-[30px] wow fadeInRight" data-wow-delay=".5s" >
                            <ListItem text="Whitepaper" />
                            <ListItem text="Website development" />
                            <ListItem text="Social media" />
                            <ListItem text="Mint Dapp Development" />
                            <ListItem text="Marketing campaigns" />
                            <ListItem text="Audit" />
                        </div>
                        <div className="roadmap-box  pl-4 sm:pl-10 py-[30px] wow fadeInLeft" data-wow-delay=".5s" >
                            <ListItem text="Pinksale public presale" />
                            <ListItem text="Pancake Swap launch" />
                            <ListItem text="Listing on CoinMarketCap" />
                            <ListItem text="Listing on CoinGecko" />
                            <ListItem text="Massive Marketing Campaigns" />
                            <ListItem text="Staking" />
                            <ListItem text="Expand Team" />
                            <ListItem text="Mint Dapp Integration" />
                            <ListItem text="1000 Mystery Box Sale" />
                            <ListItem text="Reveal Mystery Box" />
                            <ListItem text="Catoverse Development begin" />
                        </div>
                        <div className="roadmap-box pl-4 sm:pl-10 py-[30px] wow fadeInDown" data-wow-delay=".5s">
                            <ListItem text="Cronos Bridge" />
                            <ListItem text="Play to Earn Game Development" />
                            <ListItem text="Partnerships" />
                            <ListItem text="Website Revamp" />
                            <ListItem text="Catoverse First Teaser release" />
                            <ListItem text="Certik Audit" />
                            <ListItem text="3D NFT’s" />
                            <ListItem text="ETH Bridge" />
                            <ListItem text="Multiple CEX Listings" />
                        </div>
                        <div className="roadmap-box pl-4 sm:pl-10 py-[30px] wow fadeInUp" data-wow-delay=".5s">
                            <ListItem text="P2E game teaser release" />
                            <ListItem text="Massive Marketing Campaigns" />
                            <ListItem text="Grow Team" />
                            <ListItem text="P2E Game launch" />
                            <ListItem text="Continued Product Development" />
                            <ListItem text="Catoverse roadmap release" />
                            <ListItem text="Investor Partnerships" />
                            <ListItem text="Continued Marketing Push" />
                        </div>
                        <div className="roadmap-box pl-4 sm:pl-10 py-[30px] wow fadeInRight" data-wow-delay=".5s">
                            <ListItem text="Catoverse Land Sale" />
                            <ListItem text="Tier 1 CEX Listing" />
                            <ListItem text="Additional Development and Marketing" />
                            <ListItem text="Ongoing advertising Campaigns" />
                            <ListItem text="Strategic Investor Partnerships" />
                        </div>
                    </div>
                </div>
            </section>
        </section>
    </>;
}

const ListItem = ({ text }) => {
    return <p>
        <span className="mr-3 mt-2.5 sm:mt-0"><BsFillHexagonFill /></span>
        <h4 className='pr-3 sm:pr-0'>{text}</h4>
    </p>;
}




export default Roadmap;