import CONFIG from '../../../config'

export default function HalfUD(input) {
    return (
        <div className={"halfUD screen"}>
            <div className={"flex Uhalf"} style={{
                backgroundColor: CONFIG.darkmode ? "#999999" : "#ffffff",
                color: CONFIG.darkmode ? "#ffffff" : "#000000",
            }}>
                {input.children[0].type(input.content[0].content)}
            </div>
            <div className={"flex Dhalf"} style={{
                backgroundColor: CONFIG.darkmode ? "#999999" : "#ffffff",
                color: CONFIG.darkmode ? "#ffffff" : "#000000",
            }}>
                {input.children[1].type(input.content[1].content)}
            </div>
        </div>
    )
}