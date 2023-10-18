import WeatherIcon from "./barElements/WeatherIcon";
// import CONFIG from '../config'
import Ticker from "./barElements/Ticker";

export default function MainFooter() {
    return (
        <div className="main_footer" id="main_footer">
            <Ticker />
            <WeatherIcon />
        </div >
    );
}