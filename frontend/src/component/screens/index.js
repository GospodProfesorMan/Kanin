import ScreenService from "../../services/ScreenService";
import { useEffect, useState } from "react";
import SlideRenderer from "./SlideRenderer";

export default function Screen() {
    const [slidePacketBuffer, setSlidePacketBuffer] = useState()
    const [slides, setSlides] = useState();

    function changeSlides(action) {
        if (action === "fc") action = [slides[0] + 1, slides[1]]
        else if (action === "fb") {
            action = [0, slidePacketBuffer]
            ScreenService.getScreen().then(screens => {
                if (typeof screens === 'string') screens = [{"template": "full","presets": [{"preset": "raw","content": "An error occured, please contact someone about it: "+screens}]}]
                setSlidePacketBuffer(screens)
            })
        }
        document.getElementById("anim-wrapper").className = action[1][action[0]]["animation"] + "-out"
        setTimeout(() => {
            setSlides(action)
            document.getElementById("anim-wrapper").className = action[1][action[0]]["animation"] + "-in"
        }, 1000);
    }

    useEffect(() => {
        if (!slides) {
            ScreenService.getScreen().then(screens => {
                if (typeof screens === 'string') screens = [{"template": "full","presets": [{"preset": "raw","content": "An error occured, please contact someone about it: "+screens}]}]
                setSlidePacketBuffer(screens)
                changeSlides([0, screens])
            })
            return
        }
        setTimeout(() => {
            if (slides[0] === slides[1].length - 1) {
                changeSlides("fb")
            } else changeSlides("fc") //from current
        }, 10000)
    }, [slides])
    return ( slides ?
        <SlideRenderer type={slides[1][slides[0]].template} content={slides[1][slides[0]].presets} />
        : null
    )
}

