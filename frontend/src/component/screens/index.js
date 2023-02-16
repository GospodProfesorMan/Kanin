import ScreenService from "../../services/ScreenService";
import { useEffect, useState } from "react";
import SlideRenderer from "./SlideRenderer";

export default function Screen() {
    const [slide, setSlide] = useState([{
        type: "full",
        content: [
            "",
            "",
            "",
            "",
        ]
    }]);

    const [slide_n, setSlide_N] = useState(0);

    if (Date.now() % 10000 === 0) {
        ScreenService.getScreen().then(slides => {
            setSlide(slides);
        });
        setSlide_N((slide_n + 1) % slide.length);
    }

    return (
        <SlideRenderer type={slide[slide_n].type} content={slide[slide_n].content} />
    )
}

