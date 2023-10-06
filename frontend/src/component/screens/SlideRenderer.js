import Full from "./templates/full";
import HalfLQuarterUD from "./templates/halfL-quarterUD";
import QuarterUDHalfR from "./templates/quarterUD-halfR";
import HalfLR from "./templates/halfLR";
import HalfUD from "./templates/halfUD";

import Table from "./templates/presets/table";
import Raw from "./templates/presets/test"
import WeatherWeekly from "./templates/presets/weatherWeekly";
import WeatherDaily from "./templates/presets/weatherDaily";
import List from "./templates/presets/list";
import BarGraph from "./templates/presets/barGraph";
import LineGraph from "./templates/presets/lineGraph";

import UnavailableComponent from "./UnavailableComponent"

export default function SlideRenderer(input) {
    const presetMap = {
        'raw': <Raw/>,
        'table': <Table/>,
        'weatherWeekly': <WeatherWeekly/>,
        'weatherDaily': <WeatherDaily/>,
        'list': <List/>,
        'barGraph': <BarGraph/>,
        'lineGraph': <LineGraph/>,
    }
    const screenMap = {
        "full": <Full content={input.slides.presets} settings={{"background": input.slides?.settings.borderColor}}>
            {presetMap[input.slides.presets?.[0]?.preset] ? presetMap[input.slides.presets?.[0]?.preset] : <Raw/>}
        </Full>,
        "halfL-quarterUD": <HalfLQuarterUD content={input.slides.presets} settings={{"background": input.slides?.settings.borderColor}}>
            {presetMap[input.slides.presets?.[0]?.preset] ? presetMap[input.slides.presets?.[0]?.preset] : <Raw/>}
            {presetMap[input.slides.presets?.[1]?.preset] ? presetMap[input.slides.presets?.[1]?.preset] : <Raw/>}
            {presetMap[input.slides.presets?.[2]?.preset] ? presetMap[input.slides.presets?.[2]?.preset] : <Raw/>}
        </HalfLQuarterUD>,
        "quarterUD-halfR": <QuarterUDHalfR content={input.slides.presets} settings={{"background": input.slides?.settings.borderColor}}>
            {presetMap[input.slides.presets?.[0]?.preset] ? presetMap[input.slides.presets?.[0]?.preset] : <Raw/>}
            {presetMap[input.slides.presets?.[1]?.preset] ? presetMap[input.slides.presets?.[1]?.preset] : <Raw/>}
            {presetMap[input.slides.presets?.[2]?.preset] ? presetMap[input.slides.presets?.[2]?.preset] : <Raw/>}
        </QuarterUDHalfR>,
        "halfLR": <HalfLR content={input.slides.presets} settings={{"background": input.slides?.settings.borderColor}}>
            {presetMap[input.slides.presets?.[0]?.preset] ? presetMap[input.slides.presets?.[0]?.preset] : <Raw/>}
            {presetMap[input.slides.presets?.[1]?.preset] ? presetMap[input.slides.presets?.[1]?.preset] : <Raw/>}
        </HalfLR>,
        "halfUD": <HalfUD content={input.slides.presets} settings={{"background": input.slides?.settings.borderColor}}>
            {presetMap[input.slides.presets?.[0]?.preset] ? presetMap[input.slides.presets?.[0]?.preset] : <Raw/>}
            {presetMap[input.slides.presets?.[1]?.preset] ? presetMap[input.slides.presets?.[1]?.preset] : <Raw/>}
        </HalfUD>,
    }

    return screenMap[input.slides.template] ? screenMap[input.slides.template] : <Full content={null}><UnavailableComponent/></Full>
}