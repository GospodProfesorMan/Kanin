import { useEffect } from "react";

import getTicker from "../../services/TickerService";

let tickerBuffer = []
let restOfTickerItem = ""
export default function Ticker() {
    useEffect(() => {
        const startingPosition = document.getElementById('main_footer').getBoundingClientRect().right
        const tickerBar = document.getElementById('tickerBar')
        const barWidth = tickerBar.clientWidth
        // distance (form 100% to -100%) / 24seconds (animation time)
        const velocity = barWidth*2 / 24
        const testItem = document.createElement('div')
        //v primeru, da se user odloci spammat @ (edini charechter sisrsi od W) se stvar sesuje
        testItem.innerHTML = "W"
        testItem.className = 'ticker'
        tickerBar.append(testItem)
        const charecterLimit = Math.ceil(barWidth/testItem.clientWidth)
        testItem.remove()
        let addGap
        function get() {
            if (tickerBuffer.length < 10 ) getTicker().then((data) => {tickerBuffer=tickerBuffer.concat(data)})
            if (!tickerBuffer[0] && restOfTickerItem.length < 1) {
                setTimeout(get, 500)
                return
            }
            const tickerItem = document.createElement('div')
            let content
            if (restOfTickerItem.length === 0) {
                content = tickerBuffer.shift()
                if (content === undefined) content = "   "
                restOfTickerItem = content.substring(charecterLimit)
                content = content.substring(0, charecterLimit)
                addGap = 1
            }
            else {
                content = restOfTickerItem.substring(0, charecterLimit)
                restOfTickerItem = restOfTickerItem.substring(charecterLimit)
                addGap = 0
            }
            tickerItem.innerHTML = content
            tickerItem.className = 'ticker'
            const catchupDistance = startingPosition - tickerBar.lastChild?.getBoundingClientRect().right - addGap*20
            const catchupTime = catchupDistance / velocity
            tickerItem.style.animationDelay = -catchupTime+"s";
            tickerBar.append(tickerItem)
            const time = tickerItem.clientWidth / velocity - catchupTime
            setTimeout(get, time*1000)
            setTimeout(() => {
                tickerItem.remove()
            }, 26000);
        }
        get()
    }, []);

    return (
        <div id="tickerBar"></div>
    );
}
//get rid of spacing because we got whitespace: pre; now. (currenly 20px)
//add a small buffer for the emements to catch up in so it's not vissible
//also mby improve atchup mechanics since the distance is like 30px on avg