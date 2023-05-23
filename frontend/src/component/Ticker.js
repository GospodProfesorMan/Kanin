import { useEffect } from "react";

import TickerService from "../services/TickerService";

let tickerBuffer = []
export default function Ticker() {

    async function getTickerItem() {
        return await TickerService.getTicker()
    }

    useEffect(() => {
        const tickerBar = document.getElementById('tickerBar')
        function get() {
            getTickerItem().then((data) => {tickerBuffer.push(data)})
            const tickerItem = document.createElement('div')
            let content = tickerBuffer.shift()
            if (content == undefined) content = "   "
            tickerItem.innerHTML = content
            tickerItem.className = 'ticker'
            tickerBar.append(tickerItem)
            const distance = tickerBar.clientWidth*2
            const velocity = distance / 24
            const time = tickerItem.clientWidth / velocity
            setTimeout(get, time * 1000)
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