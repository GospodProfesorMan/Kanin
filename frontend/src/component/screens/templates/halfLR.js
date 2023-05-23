import CONFIG from "../../../config";

export default function HalfLR(input) {
    return (
        <div className={"screen halfLR"}>
            <div className={"Lhalf flex"} style={{
                backgroundColor: CONFIG.darkmode ? "#999999" : "#ffffff",
                color: CONFIG.darkmode ? "#ffffff" : "#000000"
            }}>
                {input.children[0].type(input.content[0].content)}
            </div>
            <div className={"Rhalf flex"} style={{
                backgroundColor: CONFIG.darkmode ? "#999999" : "#ffffff",
                color: CONFIG.darkmode ? "#ffffff" : "#000000",
            }}>
                {input.children[1].type(input.content[1].content)}
            </div>
        </div>
    )
}