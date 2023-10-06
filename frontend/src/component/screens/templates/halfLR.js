export default function HalfLR(input) {
    input.content[0].content.parentDimensionMultipliers = [0.5,1]
    input.content[1].content.parentDimensionMultipliers = [0.5,1]
    return (
        <div className={"screen halfLR"} style={{background: input.settings.background}}>
            <div className={"Lhalf flex"}>
                {input.children[0].type(input.content[0].content)}
            </div>
            <div className={"Rhalf flex"}>
                {input.children[1].type(input.content[1].content)}
            </div>
        </div>
    )
}