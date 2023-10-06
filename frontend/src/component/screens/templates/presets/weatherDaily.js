import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faCake,
    faCloudShowersHeavy,
    faSmog,
    faSnowflake,
    faSun,
    faThunderstorm,
    faWind
} from '@fortawesome/free-solid-svg-icons';
const weatherMap = {
    "sunny": faSun,
    "rainy": faCloudShowersHeavy,
    "foggy": faSmog,
    "snowy": faSnowflake,
    "thunderstormy": faThunderstorm,
    "windy": faWind
};

export default function WeatherDaily(input) {
    const errormsg = <div>something went wrong</div>
    if(!Array.isArray(input.data)) return errormsg
    const settings = input.settings
    const tempDiff = settings.tempMax-settings.tempMin
            //set reference font size of 1% of element height in pixsels.
    return (<div style={{fontSize: window.innerHeight*0.0085*input.parentDimensionMultipliers[1]+"px",
        overflow: "hidden"
    }}>
        <div className="weatherDailyInfo">
            <FontAwesomeIcon icon={weatherMap[input.icon] ? weatherMap[input.icon] : faCake} style={{
                height:"100%", minHeight: 0}}/>
            <div className='tempPeak'>{input.tempHigh+settings.tempUnit}</div>
            <div className='WDIPHW'>
                <div>Precipitation: {input.precipitation}</div><br/>
                <div>Humidity: {input.humidity}</div><br/>
                <div>Wind: {input.wind}</div>
            </div>
            <div className='weatherDate'>
                <div>Weather</div><br/>
                <div>sunday 9.10</div><br/>
                <div>{input.icon}</div>
            </div>
        </div>
        <div className='weatherGraph' style={{
            display: 'grid', 
            gridTemplateColumns: 'repeat('+input.data.length+','+(100/input.data.length)+'%)',
            // gridGap: '3px'
        }}>
            {input.data.map((item, index) => <div key={"col"+index}
                style={{display: "grid",
                gridTemplateRows: "calc(100% - 6em) 6em"
            }}>
                <div className='weatherData'>
                    <div className='tempData' 
                        style={{top: (100-(100/tempDiff)*item.temperature)+"%",
                        height: 100/tempDiff*item.temperature+"%"}}
                    >{item.temperature + settings.tempUnit}</div>
                    <div className='tempData precipitation' 
                        style={{top: (100-item.precipitation)+"%",
                        height: item.precipitation+"%"}}
                    >{item.precipitation + "%"}</div>
                </div>
                <div>
                    <h3 className='weatherTime'>{item.time}</h3>
                </div>
            </div>)}
        </div>
    </div>)
}
//graph is extremely wrong
//consult somebody about this being ugly
//do something about text in the graphs overlapping with other shit. (aka overflow hidden)
//improve error messgaes
//maybe if I have nothing better to do I'll make it like the google weather graph