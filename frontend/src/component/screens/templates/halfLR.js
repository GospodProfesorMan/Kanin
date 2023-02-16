import UnavailableComponent from "../UnavailableComponent";
import ReactHtmlParser from "react-html-parser";
import CONFIG from "../../../config";

export default function HalfLR(input) {
    return (
        <div>
            <div className={"d-flex flex-column overflow-hidden shadow-lg rounded"} style={{
                margin: "8px",
                height: "84.8vh",
                width: "49.35vw",
                float: "left",
                marginRight: "4px",
                borderRadius: "18px",
                backgroundColor: CONFIG.darkmode ? "#999999" : "#ffffff",
                color: CONFIG.darkmode ? "#ffffff" : "#000000"
            }}>
                {input.content[0] ? ReactHtmlParser(input.content[0]) : <UnavailableComponent/>}
            </div>
            <div className={"d-flex flex-column overflow-hidden shadow-lg rounded"} style={{
                margin: "8px",
                height: "84.8vh",
                width: "49.35vw",
                float: "right",
                marginLeft: "4px",
                borderRadius: "18px",
                backgroundColor: CONFIG.darkmode ? "#999999" : "#ffffff",
                color: CONFIG.darkmode ? "#ffffff" : "#000000",
            }}>
                {input.content[1] ? ReactHtmlParser(input.content[1]) : <UnavailableComponent/>}
            </div>
        </div>
    )
}