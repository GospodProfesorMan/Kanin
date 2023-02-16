import UnavailableComponent from "../UnavailableComponent";
import ReactHtmlParser from "react-html-parser";
import CONFIG from '../../../config'

export default function Empty(input) {
    return (<div className={"d-flex flex-column overflow-hidden"} style={{height: "87.5vh", backgroundColor: CONFIG.darkmode ? "#999999" : "#ffffff", color: CONFIG.darkmode ? "#ffffff": "#000000"}}>
            {input.content[0] ? ReactHtmlParser(input.content[0]) : <UnavailableComponent />}
        </div>
    )
}