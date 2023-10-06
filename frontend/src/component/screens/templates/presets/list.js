export default function List(input) {
    const errormsg = <div>something went wrong</div>
    if(!Array.isArray(input.data)) return errormsg
    const settings = input.settings
    const dividers = settings.dividers
    function count(arr) {
        let lineAmount = 0
        let pixelAmount = 0
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].text) {
                lineAmount++
                if (dividers[arr[i].divider]) {
                    const hr = dividers[arr[i].divider]
                    if (hr.unit === "em") lineAmount+=hr.width+hr.margin*2
                    else pixelAmount+=hr.width+hr.margin*2
                }
            }
            else {
                lineAmount+=count(arr[i])[0]
                pixelAmount+=count(arr[i])[1]
            }
        }
        return [lineAmount, pixelAmount]
    }
    function render(list, depth, parentKey) {
        return list.map((item, index) => item.text ? 
            <div key={parentKey+"d"+depth+"i"+index}
                style={dividers[item.divider] 
                ? {paddingLeft: depth*settings.indent+"em",
                    paddingBottom: dividers[item.divider].margin+dividers[item.divider].unit,
                    marginBottom: dividers[item.divider].margin+dividers[item.divider].unit,
                    borderBottom: dividers[item.divider].type,
                    borderBottomWidth: dividers[item.divider].width+dividers[item.divider].unit,
                    borderColor: dividers[item.divider].color,
                    color: item.color ? item.color : settings.color,
                    background: item.bg ? item.bg : settings.bg
                } : {paddingLeft: depth*settings.indent+"em",
                    color: item.color ? item.color : settings.color,
                    background: item.bg ? item.bg : settings.bg
                }}
            >
                {item.text}
            </div>
            : render(item, depth+1, parentKey+"d"+depth+"i"+index)
        )
    }
    const lines = count(input.data)
    return (<div style={{
        fontSize: (window.innerHeight*0.85*input.parentDimensionMultipliers[1]-lines[1])/lines[0]+"px",
        lineHeight: "1em",

    }}>
        {render(input.data, 0, "")}
    </div>)
}
//figure width overflow 
    //(when rendering item.text test if the text is longer than the 99.6vw and half the font size if so. loop till it fits)
    //add setting for everything or just the one line to shrink
//deal with double looping and styling redunadancy?
//figure errors