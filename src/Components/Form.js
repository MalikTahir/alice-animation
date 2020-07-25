import React from 'react'
import './Form.css'
import useWebAnimations, { shakeX } from "@wellyshen/use-web-animations";
function Form() {
    
    const {ref,playState,getAnimation} = useWebAnimations({...shakeX})
    // const {ref} = useWebAnimations({
    //     keyframes:[
    //         {transform:"translateX(40px)"},
    //         {transform:"translateX(80px)"}
    //     ],

    //     timing: {
    //         delay: 500, // Start with a 500ms delay
    //         duration: 1000, // Run for 1000ms
    //         iterations: 5, // Repeat once
    //         direction: "alternate", // Run the animation forwards and then backwards
    //         easing: "ease-in-out", // Use a fancy timing function
    //       },
    // });
    const formBtn=()=>{
        getAnimation().play();
    }
    return (
        <div className="form">
            <div className="form__title">Enquires</div> 
            
            <div ref={ref}  className="form__input">
                <input   type="text" className="form__name" placeholder="Name:"/>
                <input  type="text" className="form__subject" placeholder="Subject:"/>
                <input  type="text" className="form__email" placeholder="E-mail:"/>
                <input  type="text" className="form__message" placeholder="Message:"/>
                <div onClick={formBtn} className="form__button">Push It Good</div>
            </div>
        </div>
    )
}

export default Form
