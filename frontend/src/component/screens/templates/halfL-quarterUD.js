import CONFIG from '../../../config'

export default function HalfLQuarterUD(input) {
    return (
        <div className={"screen halfL-qUD"}>
            <div className={"flex halfLq"} style={{
                backgroundColor: CONFIG.darkmode ? "#999999" : "#ffffff",
                color: CONFIG.darkmode ? "#ffffff" : "#000000"
            }}>
                {input.children[0].type(input.content[0].content)}
            </div>
            <div className={"flex qRU"} style={{
                backgroundColor: CONFIG.darkmode ? "#999999" : "#ffffff",
                color: CONFIG.darkmode ? "#ffffff" : "#000000"
            }}>
                {input.children[1].type(input.content[1].content)}
            </div>
            <div className={"flex qRD"} style={{
                backgroundColor: CONFIG.darkmode ? "#999999" : "#ffffff",
                color: CONFIG.darkmode ? "#ffffff" : "#000000"

            }}>
                {input.children[2].type(input.content[2].content)}
            </div>
        </div>
    )
}