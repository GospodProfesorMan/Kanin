export default function Weather(input) {
    const errormsg = <div>something went wrong</div>
    if(!Array.isArray(input) || input.length !== 5) return errormsg
    return (<div style={{display: 'grid', gridTemplateColumns: 'repeat(5, calc(20% - 3px))', minHeight: '100%',
    gridGap: '3px'}}>
        {input.map((item, index) => <div key={"col"+index}>
            <p>temp: {item.temp}</p><br/>
        </div>)}
    </div>)
}
//add more weather stuff