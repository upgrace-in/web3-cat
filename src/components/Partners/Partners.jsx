import React from 'react'
import "./partners.css";
import partner1 from "../../assets/partners/partner1.png";
import partner2 from "../../assets/partners/partner2.png";
import partner3 from "../../assets/partners/partner3.png";
import partner4 from "../../assets/partners/partner4.png";
import partner5 from "../../assets/partners/partner5.png";
import partner6 from "../../assets/partners/partner6.png";
import partner7 from "../../assets/partners/partner7.png";
import partner8 from "../../assets/partners/partner8.png";
import partner9 from "../../assets/partners/partner9.png";
import partner10 from "../../assets/partners/partner10.png";

import partner11 from "../../assets/partners/partner11.png";
import partner12 from "../../assets/partners/partner12.jpg";
import partner13 from "../../assets/partners/partner13.png";


function Partners() {
    return <>
        <div className='container mx-auto'>
            <h1 className='partner-heading text-white font-garmani m-auto sm:text-right text-left px-10  text-2xl sm:text-3xl md:text-5xl lg:text-5xl wow fadeInDown' data-wow-delay=".5s"><span className='heading-border'><hr /></span>Listing Partners</h1>
            <section className='partners-img grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-between  mb-32 mt-12 m-auto partners flex-wrap  gap-8 wow fadeInUp' data-wow-delay=".5s">
                <PartnersDiv partner={partner1} url="https://pancakeswap.finance/"/>
                <PartnersDiv partner={partner2} url="https://coinmarketcap.com/"/>
                <PartnersDiv partner={partner3} url="https://www.coingecko.com/"/>
                <PartnersDiv partner={partner4} url="https://www.pinksale.finance/" />
                <PartnersDiv partner={partner6} url="#"/>
                {/* <PartnersDiv partner={partner5} url="https://watcher.guru/coin/billionairecat?newListing=true"/> */}
                <PartnersDiv partner={partner7} url="https://coinsniper.net/coin/34760"/>
                {/* <PartnersDiv partner={partner8} url="https://cointoplist.net/coin/billionairecat"/> */}
                <PartnersDiv partner={partner9} url="https://coinvote.cc/"/>
                <PartnersDiv partner={partner10} url="https://gemfinder.cc/gem/9660"/>
                
                <PartnersDiv partner={partner11} url="https://nomics.com/assets/bcat4-billionaire-cat"/>
                {/* <PartnersDiv partner={partner12} url="#"/> */}
                {/* <PartnersDiv partner={partner13} url="#"/> */}
            </section>
        </div>
    </>;
}

const PartnersDiv = (props) => {
    const { value, classes, topLeft = "5px", topRight = "5px", bottomRight = "5px", bottomLeft = "5px", partner, url } = props;
    return (<a href={url} target="_blank"><img src={partner} className="img-fluid" alt="" /></a>)

}


export default Partners