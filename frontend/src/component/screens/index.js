import getScreen from "../../services/ScreenService";
import { useEffect, useReducer } from "react";
import SlideRenderer from "./SlideRenderer";

export default function Screen() {
    const retriveSlides = (state, action) => {
        if (action === "animate") {
            setTimeout(() => dispatch("incriment"), 1000)
            return {
                "slideIndex": state.slideIndex,
                "slides": state.slides,
                "animation": state.slides[state.slideIndex].settings.animation+"-out"
            }
        }

        let animation = state.animation
        let screens = state.slides ? state.slides : []
        let slideIndex = state.slideIndex

        if (Array.isArray(action)) {
            screens = screens.concat(action)
        }

        if (action === "incriment" || slideIndex === -1){
            slideIndex++
            if (typeof screens[slideIndex] === 'number') {
                screens[slideIndex] -= 1
                if (screens[slideIndex] < 0) screens.splice(0, slideIndex+1)
                slideIndex = 0
            }
            //if there are no loaded slides try again in 10 seconds. no animations. breaks if number?
            if (typeof screens[slideIndex] === 'undefined') {
                slideIndex--
                setTimeout(() => dispatch("incriment"), 10000)
            } else {
                animation = screens[slideIndex].settings.animation+"-in"
                setTimeout(() => dispatch("animate"), screens[slideIndex].settings.duration*1000)
            }
        }

        //check error?
        let toSubtractSeconds = 0
        for (let i = 0; i < slideIndex+1; i++) toSubtractSeconds += screens[i].settings.duration
        let inSlideLoopTimeCounter = 0
        let loadedSlideTimeSeconds = -toSubtractSeconds
        for (let i = 0; i < screens.length; i++) {
            if (typeof screens[i] === 'number') {
                loadedSlideTimeSeconds += inSlideLoopTimeCounter*(screens[i] > -1 ? screens[i]+1 : 1)
                inSlideLoopTimeCounter = 0
            } else inSlideLoopTimeCounter += screens[i].settings.duration
        }
        if (loadedSlideTimeSeconds < 60) getScreen().then(screens => dispatch(screens))
        
        return {
            "slideIndex": slideIndex,
            "slides": screens,
            "animation": animation
        }
    }
    
    const [slides, dispatch] = useReducer(retriveSlides, {"slideIndex": -1});

    useEffect(() => {
        getScreen().then(screens => {
            // put this in the screen service
            //if (typeof screens === 'string') screens = [{"template": "full","presets": [{"preset": "raw","content": "An error occured, please contact someone about it: "+screens}]}]
            dispatch(screens)
        })
    }, [])

    return ( 
        slides.slides ?
        <div id="anim-wrapper" className={slides.animation}><SlideRenderer slides={slides.slides[slides.slideIndex]}/></div>
        : <div className="loading screen">
            <div className="loadingIcon"></div>
            <div className="loadingText">loading</div>
        </div>
    )
}

//handle errors if you gotta return an empty array or something
//when something doesn't load make an alert on the 'nav'
//test time counter and other
    //def breaks if you put in 2 numbers back to back