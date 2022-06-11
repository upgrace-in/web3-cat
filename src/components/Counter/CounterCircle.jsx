import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
} from "react-circular-progressbar";
import RadialSeparators from "./RadialSeparators";
import 'react-circular-progressbar/dist/styles.css';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { useState, useEffect } from "react";

// import usest
const CounterCircle = ({ numValue, keyValue , decimals}) => {
    return <div className="mx-auto" style={{ width: 110, height: 110 }} >
        <CircularProgressbarWithChildren
            value={numValue}
            strokeWidth={12}
            styles={buildStyles({
                strokeLinecap: "butt",
                textSize: '28px',
                textColor: 'white',
                pathColor: `rgb(228, 168, 65)`,
                trailColor: 'rgb(40, 36, 36)',
            })}
        >
            <p className="text-white font-black"><span className="text-4xl" >
                <CountUp end={numValue} redraw={true} separator=" " decimals={decimals}
                decimal=".">
                    {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                            <span ref={countUpRef} />
                        </VisibilitySensor>
                    )}
                </CountUp>
            </span> <br />%</p>
            <RadialSeparators
                count={12}
                style={{
                    background: "#201d1d",
                    width: "2px",
                    // This needs to be equal to props.strokeWidth
                    height: `${12}%`
                }}
            />
        </CircularProgressbarWithChildren>
    </div>;
}

export default CounterCircle;