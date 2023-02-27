import CONFIG from '../../../config'

export default function HalfLQuarterUD(input) {
    return (
        <div>
            <div className={"d-flex flex-column overflow-hidden shadow-lg rounded"} style={{
                margin: "8px",
                height: "84.8vh",
                width: "49.37vw",
                borderRadius: "18px",
                float: "left",
                marginRight: "4px",
                backgroundColor: CONFIG.darkmode ? "#999999" : "#ffffff",
                color: CONFIG.darkmode ? "#ffffff" : "#000000"
            }}>
                {input.children[0].type(input.content[0].content)}
            </div>
            <div className={"d-flex flex-column overflow-hidden shadow-lg rounded"} style={{
                margin: "8px",
                height: "42vh",
                width: "49.37vw",
                borderRadius: "18px",
                float: "right",
                marginBottom: "4px",
                marginLeft: "4px",
                backgroundColor: CONFIG.darkmode ? "#999999" : "#ffffff",
                color: CONFIG.darkmode ? "#ffffff" : "#000000"
            }}>
                {input.children[1].type(input.content[1].content)}
            </div>
            <div className={"d-flex flex-column overflow-hidden shadow-lg rounded"} style={{
                margin: "8px",
                height: "42vh",
                width: "49.37vw",
                borderRadius: "18px",
                float: "right",
                marginTop: "4px",
                marginLeft: "4px",
                backgroundColor: CONFIG.darkmode ? "#999999" : "#ffffff",
                color: CONFIG.darkmode ? "#ffffff" : "#000000"

            }}>
                {input.children[2].type(input.content[2].content)}
            </div>
        </div>
    )
}