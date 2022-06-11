import "./mysterybox.css";
import imgBorder from "../../assets/hero-sofa-border.png";
import giftBox from "../../assets/giftbox.png";
import blueBack from "../../assets/blue-back.png";
import {
    Link
} from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";

function MysteryBox() {
    return <>
        <section className="roadmap-div">
            <section className="mystery-box container   m-auto">
                <div className="absolute top-[3rem] sm:top-[10rem] xl:top-[14rem] lg:max-w-[729px] left-[33%] transform-custom" >
                    <h1 className="font-garmani  text-2xl lg:text-[62px] sm:text-[40px] sm:leading-[50px] text-right lg:leading-[74px] font-normal text-white wow slideInDown" data-wow-delay=".5s">Mint Billionaire Cat's Mystery Boxes</h1>
                </div>
                <div className="mysteryBox-text  wow slideInLeft" data-wow-delay=".5s">
                    <h1 className="text-2xl font-inter">
                        Minsters have a chance to win
                    </h1>
                    <ul className="mysteryBox-list space-y-2 font-inter">
                        <li>Tesla</li>
                        <li>Bitcoin</li>
                        <li>Cash</li>
                        <li>Exclusive NFTs Mint</li>
                        <li>And much more</li>
                    </ul>
                    <Link to="/cat-mint" className="mt-4">MINT</Link>
                </div>
                <div className="wow slideInRight" data-wow-delay=".5s">

                    <div className="" >
                        <img src={giftBox} className="w-full max-w-[657px]" alt="" />
                    </div>
                </div>
            </section>
        </section>

    </>
}

export default MysteryBox