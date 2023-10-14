import Table from "./templates/table";
import Raw from "./templates/test"
import WeatherWeekly from "./templates/weatherWeekly";
import WeatherDaily from "./templates/weatherDaily";
import List from "./templates/list";
import BarGraph from "./templates/barGraph";
import LineGraph from "./templates/lineGraph";

// import UnavailableComponent from "./UnavailableComponent"

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

    const template = input.slides.template
    let templateMatrix = template.split('" "')
    templateMatrix[0] = templateMatrix[0].slice(1)
    templateMatrix[templateMatrix.length-1] = templateMatrix[templateMatrix.length-1].slice(0,-1)
    let areas = new Set(template.replace(/"/g, "").split(' '))
    let parentDimesionMultipliers = {}
    const xSectorSize = 1/templateMatrix[0].split(' ').length
    const ySectorSize = 1/templateMatrix.length
    areas.forEach(area => {
        const totalInstances = template.match(new RegExp( area, 'g' )).length
        let i = 0
        let instances = 0
        while (!instances) {
            instances = templateMatrix[i].match(new RegExp( area, 'g' ))?.length
            i++
        }
        parentDimesionMultipliers[area] = {"x": xSectorSize*instances, "y": ySectorSize*(totalInstances/instances)}
    })

    return <div className="screen" style={{gridTemplateAreas: input.slides.template}}>
        {input.slides.presets.map((item, i) => 
            <div className="flex" style={{gridArea: item.gridArea}} key={"flex"+i}>
                {(presetMap[item.preset] || <Raw/>).type(item.content)}
            </div>
        )}
    </div>
    
    //error handle
}