import React ,{useState} from 'react'
import './Animation.css'
import SvgComp from './SvgComp'
import {Fab} from '@material-ui/core'
import MailIcon from '@material-ui/icons/Mail';
import useWebAnimations, { backInUp } from "@wellyshen/use-web-animations";
import Form from './Form'
function Animation() {

    const [hidden,setHidden]=useState(true);

    const {ref,playState,getAnimation} = useWebAnimations({
        playbackRate: 0.5, // Change playback rate, default is 1
        autoPlay: false,
        keyframes:[
            {transform:"translateY(800px)"},
            {transform:"translateY(20px)"}
        ],

        timing: {
             // Start with a 500ms delay
            duration: 500, // Run for 1000ms
            iterations: 1, // Repeat once
            direction: "alternate", // Run the animation forwards and then backwards
            easing: "ease-in-out", // Use a fancy timing function
          },
    }); 
    

    

    const playAnimation=()=>{
         getAnimation().play();
         setHidden(!hidden)
        
        
    }

    return (
        <div>
        <div className="animation">
            <div className="animation__info">
                <span className="animation__title">CORTEX</span>
                <span className="animation__title1">COPYWRITER</span>
                <span className="animation__title2">Enhance your communications with psychology-based copywriting and UX writing</span>
                
                <div onClick={playAnimation} className="animation__sendMsg"> Send a Message</div>
            </div>
            
            <div className="animation__svg">
                <SvgComp></SvgComp>  
                
            </div>
            <div className="animation__fab">
                <Fab 
                onClick={playAnimation}>
                    <MailIcon className="fab"></MailIcon>
                </Fab>
            </div>
            
            <div ref={ref} className="animation__form">
            {!(hidden) &&    <Form></Form> }
            </div>
            
        </div>
        
        </div> 
    )
}

export default Animation
