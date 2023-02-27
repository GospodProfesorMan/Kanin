import CONFIG from '../../../config'

export default function Full(input) {
    return (<div className={"d-flex flex-column overflow-hidden m-2 shadow-lg rounded"} style={{height: "84.8vh", borderRadius: "18px",
            backgroundColor: CONFIG.darkmode ? "#999999" : "#ffffff",
            color: CONFIG.darkmode ? "#ffffff" : "#000000"}}>
            {input.children.type(input.content[0].content)}
        </div>
    )
}