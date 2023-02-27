import Full from "./templates/full";
import HalfLQuarterUD from "./templates/halfL-quarterUD";
import QuarterUDHalfR from "./templates/quarterUD-halfR";
import HalfLR from "./templates/halfLR";
import HalfUD from "./templates/halfUD";

import Table from "./templates/presets/table";
import Raw from "./templates/presets/test"

export default function SlideRenderer(input) {

    const presetMap = {
        'raw': <Table/>
    }
    const screenMap = {
        "full": <Full content={input.content}>{presetMap[input.content[0]?.preset] ? presetMap[input.content[0]?.preset] : <Raw/>}</Full>,
        "halfL-quarterUD": <HalfLQuarterUD content={input.content}>
            {presetMap[input.content[0]?.preset] ? presetMap[input.content[0]?.preset] : <Raw/>}
            {presetMap[input.content[1]?.preset] ? presetMap[input.content[1]?.preset] : <Raw/>}
            {presetMap[input.content[2]?.preset] ? presetMap[input.content[2]?.preset] : <Raw/>}
        </HalfLQuarterUD>,
        "quarterUD-halfR": <QuarterUDHalfR content={input.content}>
            {presetMap[input.content[0]?.preset] ? presetMap[input.content[0]?.preset] : <Raw/>}
            {presetMap[input.content[1]?.preset] ? presetMap[input.content[1]?.preset] : <Raw/>}
            {presetMap[input.content[2]?.preset] ? presetMap[input.content[2]?.preset] : <Raw/>}
        </QuarterUDHalfR>,
        "halfLR": <HalfLR content={input.content}>
            {presetMap[input.content[0]?.preset] ? presetMap[input.content[0]?.preset] : <Raw/>}
            {presetMap[input.content[1]?.preset] ? presetMap[input.content[1]?.preset] : <Raw/>}
        </HalfLR>,
        "halfUD": <HalfUD content={input.content}>
            {presetMap[input.content[0]?.preset] ? presetMap[input.content[0]?.preset] : <Raw/>}
            {presetMap[input.content[1]?.preset] ? presetMap[input.content[1]?.preset] : <Raw/>}
        </HalfUD>,
    }

    return screenMap[input.type]
}