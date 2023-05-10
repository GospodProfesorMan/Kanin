export default function Table(input) {
    const errormsg = <div>something went wrong</div>
    if(!Array.isArray(input)) return errormsg
    const len = input[0].length
    for (let i = 0; i < input.length; i++) {
        if(!Array.isArray(input[i]) || input[i].length !== len) return errormsg
    }
    return (<div className="table" style={{gridTemplateRows:'repeat('+input.length+', calc('+100/input.length+'% - 2px))',
            gridTemplateColumns:'repeat('+len+', calc('+100/len+'% - 2px))'}}>
        {input.map((row, indexr) => row.map((item, indexc) =>
            <div key={'r'+indexr+'c'+indexc} style={Array.isArray(item) ? 
            {gridTemplateColumns: 'repeat('+item.length+', '+(100/item.length).toString()+'%)', display: 'grid'}
            : null}>
                {Array.isArray(item) ? item.map((subItem, subindex) => 
                    <div key={'r'+indexr+'c'+indexc+'s'+subindex}>{subItem}</div>)
                : item}
            </div>
        ))}
    </div>)
}
//improve error messages and check small elements
//add styling for individeula cells (do the contrast thingy)
//figure out a good font size and text placement
//figure out other spacing, styling and overflow