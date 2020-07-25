import React from 'react'
import './SvgComp.css'
import Brain from './../Intro_Brain.svg'
import Wave from './../Intro_Front_Layer.svg'
import BG from './../Intro_Featured_Image_Empty.svg'
import useWebAnimations, { bounce } from "@wellyshen/use-web-animations";

function SvgComp() {
    const {ref,playState,getAnimation} = useWebAnimations({
        keyframes:[
            {transform:"translateY(0px)"},
            {transform:"translateY(20px)"}
        ],

        timing: {
            delay: 500, // Start with a 500ms delay
            duration: 1000, // Run for 1000ms
            iterations: Infinity, // Repeat once
            direction: "alternate", // Run the animation forwards and then backwards
            easing: "ease-in-out", // Use a fancy timing function
          },
    }); 
    return (
        <div className="svgComp">
            <div className="svg__animation">
            <img src={Brain} alt="" className="svg__brain" ref={ref}/>
            <img src={Wave} alt="" className="svg__wave"/>
            <img src={BG} alt="" className="svg__bg"/>
            </div>
        </div>
    )
}

export default SvgComp
