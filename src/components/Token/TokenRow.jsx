import { useEffect, useState, useRef } from "react";

const TokenRow = ({ heading, persentage, id, subheading, desc, slideTo, slideDuration}) => {
    const [animatedPercentage, setAnimatedPercentage] = useState(0);
    useEffect(() => {
        const scrollHandler = () => {
            const rect = document.getElementById(`${id}`)?.getBoundingClientRect();
            var elemTop = rect?.top ?? 0;
            var elemBottom = rect?.bottom ?? 0;
           const isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
            if(isVisible) {
                let i = 0;
            if (i == 0) {
                i = 1;
                let width = 0;
                const id = setInterval(frame, 120);
                function frame () {
                if (width >= persentage) {
                    clearInterval(id)
;
                    document.removeEventListener('scroll', scrollHandler);
                    i = 0;
                } else {
                    width++;
                    setAnimatedPercentage(width)
                }
                }
            } 
            }
        }
        setTimeout(() => {
            document.addEventListener('scroll', scrollHandler)
        }, 1000);
        return () => {
        document.removeEventListener('scroll', scrollHandler)
        }
    },[])
    return <div id={id} className="token-row ">
        <div className="token-row-heading primary-color">{heading}</div>
        <div className="token-row-progressbar wow fadeInLeft" data-wow-delay=".5s">
            <div className="token-progressbar-back">
                <div className="token-progressbar" style={{ transition: 'all .8s',  width: `${animatedPercentage * 5}%` }}>
                </div>
            </div>
            <div className="token-progressbar-text px-3 md:px-5 lg:px-8  primary-background text-sm md:text-lg" style={{ transition: 'all .8s', left: `${animatedPercentage * 5 + 2}%` }}><b className="text-sm md:text-lg" >{animatedPercentage}</b> %</div>
        </div>
        <div className="token-row-detail space-y-3 wow fadeInRight" data-wow-delay=".5s">
            <h1 className="primary-color">{subheading}</h1>
            <p className="text-white token-text-bar">{desc}</p>
        </div>
    </div>;
}
export default TokenRow