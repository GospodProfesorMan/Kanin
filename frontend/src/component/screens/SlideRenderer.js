import Full from "./templates/full";
import HalfLQuarterUD from "./templates/halfL-quarterUD";
import QuarterUDHalfR from "./templates/quarterUD-halfR";
import HalfLR from "./templates/halfLR";
import HalfUD from "./templates/halfUD";
import Empty from "./templates/empty";

export default function SlideRenderer(input) {
    const screenMap = {
        "full": <Full content={input.content}/>,
        "halfL-quarterUD": <HalfLQuarterUD content={input.content}/>,
        "quarterUD-halfR": <QuarterUDHalfR content={input.content}/>,
        "halfLR": <HalfLR content={input.content}/>,
        "halfUD": <HalfUD content={input.content}/>,
        "empty": <Empty content={input.content}/>,
    }

    return screenMap[input.type]
}