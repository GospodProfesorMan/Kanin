export default function Full(input) {
    input.content[0].content.parentDimensionMultipliers = [1,1]
    return (<div className="screen full flex" 
            style={{"--borderColor": input.settings.background, "--inverted": input.settings.bgInverted || "white"}}
        >
            {input.children.type(input.content[0].content)}
        </div>
    )
}