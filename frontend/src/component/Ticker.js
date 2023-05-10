import { useEffect } from "react";

import TickerService from "../services/TickerService";

export default function Ticker() {

    async function getTickerItem() {
        return await TickerService.getTicker()
    }

    useEffect(() => {
        const tickerBar = document.getElementById('tickerBar')
        async function get() {
            const data = await getTickerItem()
            const tickerItem = document.createElement('div')
            tickerItem.innerHTML = data
            tickerItem.className = 'ticker'
            tickerBar.append(tickerItem)
            const distance = tickerBar.clientWidth*2
            const velocity = distance / 24
            const time = tickerItem.clientWidth / velocity
            console.log(time, velocity, distance, tickerItem.clientWidth);
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