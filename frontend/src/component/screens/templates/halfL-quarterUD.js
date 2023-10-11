export default function HalfLQuarterUD(input) {
    input.content[0].content.parentDimensionMultipliers = [0.5,1]
    input.content[1].content.parentDimensionMultipliers = [0.5,0.5]
    input.content[2].content.parentDimensionMultipliers = [0.5,0.5]
    return (
        <div className={"screen halfL-qUD"} style={{"--borderColor": input.settings.background}}>
            <div className={"flex halfLq"}>
                {input.children[0].type(input.content[0].content)}
            </div>
            <div className={"flex qRU"}>
                {input.children[1].type(input.content[1].content)}
            </div>
            <div className={"flex qRD"}>
                {input.children[2].type(input.content[2].content)}
            </div>
        </div>
    )
}