import UnavailableComponent from "../UnavailableComponent";
import ReactHtmlParser from "react-html-parser"
import CONFIG from '../../../config'

export default function Full(input) {
    return (<div className={"d-flex flex-column overflow-hidden m-2 shadow-lg rounded"} style={{height: "84.8vh", borderRadius: "18px",
            backgroundColor: CONFIG.darkmode ? "#999999" : "#ffffff",
            color: CONFIG.darkmode ? "#ffffff" : "#000000"}}>
            {input.content[0] ? ReactHtmlParser(input.content[0]) : <UnavailableComponent />}
        </div>
    )
}