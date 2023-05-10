import CONFIG from '../../../config'

export default function Full(input) {
    return (<div className="screen full" style={{
            backgroundColor: CONFIG.darkmode ? "#999999" : "#ffffff",
            color: CONFIG.darkmode ? "#ffffff" : "#000000"
            }}>
            {input.children.type(input?.content?.[0]?.content)}
        </div>
    )
}