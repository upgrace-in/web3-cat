import "./contact.css";
function Contact() {
    return <>
        <section className="contact mt-32">
            <div className="contact-heading text-white font-garmani font-normal lg:text-[48px] sm:text-[34px] text-[32px] sm:leading-[55px] leading-[42px] wow slideInLeft" data-wow-delay=".5s">
                Buy Billionaire Cat on Pancakeswap
            </div>
            <div className="contact-address wow slideInDown" data-wow-delay=".5s">
                <h3 className="leading-[45px] text-[24px] font-medium">Contract Address:</h3>
                <p className="leading-[45px] text-base text-center sm:text-[22px] mt-[2px] font-normal ">0x17534dA60Daff58ee1d77EF4aEc6556E03Ff39B9</p>
            </div>
            <div className="contact-buy wow slideInRight" data-wow-delay=".5s">
                <h3 className="text-lg leading-[45px] text-[24px] font-medium">Buy Billionaire Cats</h3>
                <button className="font-medium">BUY</button>
            </div>
        </section>
    </>;
}

export default Contact