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
                {input.children[0].type(input.content[0].content)}
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
                {input.children[1].type(input.content[1].content)}
            </div>
        </div>
    )
}