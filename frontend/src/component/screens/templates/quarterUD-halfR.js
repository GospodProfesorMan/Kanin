import CONFIG from '../../../config'

export default function QuarterUDHalfR(input) {
    return (
        <div className={"screen halfR-qUD"}>
            <div className={"flex qLU"} style={{
                backgroundColor: CONFIG.darkmode ? "#999999" : "#ffffff",
                color: CONFIG.darkmode ? "#ffffff" : "#000000"
            }}>
                {input.children[0].type(input.content[0].content)}
            </div>
            <div className={"flex qLD"} style={{
                backgroundColor: CONFIG.darkmode ? "#999999" : "#ffffff",
                color: CONFIG.darkmode ? "#ffffff" : "#000000"
            }}>
                {input.children[1].type(input.content[1].content)}
            </div>
            <div className={"flex halfRq"} style={{
                backgroundColor: CONFIG.darkmode ? "#999999" : "#ffffff",
                color: CONFIG.darkmode ? "#ffffff" : "#000000"

            }}>
                {input.children[2].type(input.content[2].content)}
            </div>
        </div>
    )
}