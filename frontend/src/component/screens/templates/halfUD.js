export default function HalfUD(input) {
    input.content[0].content.parentDimensionMultipliers = [1,0.5]
    input.content[1].content.parentDimensionMultipliers = [1,0.5]
    return (
        <div className={"halfUD screen"} style={{background: input.settings.background}}>
            <div className={"flex Uhalf"}>
                {input.children[0].type(input.content[0].content)}
            </div>
            <div className={"flex Dhalf"}>
                {input.children[1].type(input.content[1].content)}
            </div>
        </div>
    )
}