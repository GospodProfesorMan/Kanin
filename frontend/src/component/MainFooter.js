import WeatherIcon from "./WeatherIcon";
import CONFIG from '../config'
import Ticker from "./Ticker";

export default function MainFooter() {
    return (
        <div>
            <table>
                <tbody className="fixed-bottom shadow-lg px-2" style={{ backgroundColor: (CONFIG.darkmode ? "#333333" : "#ffffff"), height: "7vh", }}>
                    <tr className="d-flex align-items-center m-0 p-0 h-100">
                        <th sm="auto" className="d-flex justify-content-center" style={{ color: (CONFIG.darkmode ? "#ffffff" : "#000000"), }}>
                            <WeatherIcon />
                        </th>
                        <th className="d-flex justify-content-center p-0 px-2" style={{ color: (CONFIG.darkmode ? "#ffffff" : "#000000"), width: "100%", overflow: "hidden" }}>
                            <Ticker />
                        </th>
                    </tr>
                </tbody>
            </table>
        </div >
    );
}