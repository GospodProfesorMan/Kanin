import UnavailableComponent from "../UnavailableComponent";
import ReactHtmlParser from "react-html-parser";
import CONFIG from '../../../config'

export default function HalfUD(input) {
    return (
        <div>
            <div className={"d-flex flex-column overflow-hidden shadow-lg rounded"} style={{
                margin: "8px",
                height: "42vh",
                width: "99.2vw",
                marginBottom: "4px",
                borderRadius: "18px",
                backgroundColor: CONFIG.darkmode ? "#999999" : "#ffffff",
                color: CONFIG.darkmode ? "#ffffff" : "#000000",
            }}>
                {input.content[0] ? ReactHtmlParser(input.content[0]) : <UnavailableComponent/>}
            </div>
            <div className={"d-flex flex-column overflow-hidden shadow-lg rounded"} style={{
                margin: "8px",
                height: "42vh",
                width: "99.2vw",
                marginTop: "4px",
                borderRadius: "18px",
                backgroundColor: CONFIG.darkmode ? "#999999" : "#ffffff",
                color: CONFIG.darkmode ? "#ffffff" : "#000000",
            }}>
                {input.content[1] ? ReactHtmlParser(input.content[1]) : <UnavailableComponent/>}
            </div>
        </div>
    )
}