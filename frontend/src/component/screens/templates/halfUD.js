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
                {input.children[0].type(input.content[0].content)}
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
                {input.children[1].type(input.content[1].content)}
            </div>
        </div>
    )
}