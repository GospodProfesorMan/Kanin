import ScreenService from "../../services/ScreenService";
import { useEffect, useState } from "react";
import SlideRenderer from "./SlideRenderer";

export default function Screen() {
    const [slides, setSlides] = useState();

    useEffect(() => {
        if (!slides) return
        setTimeout(() => {
            if (slides[0] === slides[1].length - 1) {
                ScreenService.getScreen().then(screens => {
                    if (typeof screens === 'string') screens = [{"template": "full","presets": [{"preset": "raw","content": "An error occured, please contact someone about it: "+screens}]}]
                    setSlides([0, screens])
                })
            } else setSlides(current => [current[0]+1, current[1]])
        }, 10000)
    }, [slides])

    useEffect(() => {
        ScreenService.getScreen().then(screens => {
            if (typeof screens === 'string') screens = [{"template": "full","presets": [{"preset": "raw","content": "An error occured, please contact someone about it: "+screens}]}]
            setSlides([0, screens])
        })
    }, [])

    return ( slides ?
        <SlideRenderer type={slides[1][slides[0]].template} content={slides[1][slides[0]].presets} />
        : null
    )
}

