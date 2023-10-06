export default function Full(input) {
    input.content[0].content.parentDimensionMultipliers = [1,1]
    return (<div className="screen full flex" style={{background: input.settings.background}}>
            {input.children.type(input.content[0].content)}
        </div>
    )
}