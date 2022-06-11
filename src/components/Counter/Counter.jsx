import "./counter.css"
import CounterCircle from "./CounterCircle";

function Counter() {
    const percentage = 66;
    const trest= 0.2;
    return <>
        <section className='counter lg:my-[130px] my-[84px] '>
            <h1 className="counter-heading font-garmani lg:text-[63px] sm:text-[38px] text-[32px] font-normal leading-[42px] sm:leading-[74px] text-white mb-[45px]"
                >Billionaire Cat Mystery Box
            </h1>
            <p className="counter-expli md:text-[22px] sm:text-[18px] text-[16px] font-normal leading-[22px] sm:leading-[45px] mb-[69px]">The more $BCAT you hold the luckier member you are to <br /> get a change to get whitelisted for Mystery Box!</p>
            <p className="text-[#FFD372]">What rarities inside/drop are</p>
            <div className="counter-progress lg:space-x-7 space-y-5 lg:space-y-0 mt-[70px] flex justify-center gap-x-2.5">
                <div className="space-y-4 mt-4 lg:mt-0">
                    <p className="counter-yellow-text text-[#FFD372]">Common</p>
                    <CounterCircle numValue="60" key="1" keyValue="1"/>
                </div>
                <div className="space-y-4">
                    <p className="counter-yellow-text text-[#FFD372]">Uncommon</p>
                    <CounterCircle numValue="25" key="2" keyValue="2"/>
                </div>
                <div className="space-y-4">
                    <p className="counter-yellow-text text-[#FFD372]">Rare</p>
                    <CounterCircle numValue="13" key="3" keyValue="3"/>
                </div>
                <div className="space-y-4">
                    <p className="counter-yellow-text text-[#FFD372]">EPIC</p>
                    <CounterCircle numValue="1" key="4" keyValue="4"/>
                </div>
                <div className="space-y-4">
                    <p className="counter-yellow-text text-[#FFD372]">Legendary</p>
                    <CounterCircle numValue='0.1' key="5" keyValue="5" decimals={1}/>
                </div>
            </div>
        </section>
    </>;
}



export default Counter