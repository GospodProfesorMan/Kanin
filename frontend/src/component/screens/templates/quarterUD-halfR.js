export default function QuarterUDHalfR(input) {
    input.content[0].content.parentDimensionMultipliers = [0.5,0.5]
    input.content[1].content.parentDimensionMultipliers = [0.5,0.5]
    input.content[2].content.parentDimensionMultipliers = [0.5,1]
    return (
        <div className={"screen halfR-qUD"} style={{background: input.settings.background}}>
            <div className={"flex qLU"}>
                {input.children[0].type(input.content[0].content)}
            </div>
            <div className={"flex qLD"}>
                {input.children[1].type(input.content[1].content)}
            </div>
            <div className={"flex halfRq"}>
                {input.children[2].type(input.content[2].content)}
            </div>
        </div>
    )
}