import { useEffect } from "react";

import TickerService from "../services/TickerService";

export default function Ticker() {

    async function getTickerItem() {
        return await TickerService.getTicker()
    }

    //figure out an optimal interval to fetch
    useEffect(() => {
        const tickerBar = document.getElementById('tickerBar')
        setInterval(async () => {
            const data = await getTickerItem()
            const tickerItem = document.createElement('div')
            tickerItem.innerHTML = data
            tickerItem.className = 'ticker'
            tickerItem.style.display = 'inline-block'
            tickerItem.style.width = "100%"
            tickerItem.style.position = 'absolute'
            tickerBar.append(tickerItem)
            setTimeout(() => {
                tickerItem.remove()
            }, 25000);
        }, 5000);
    }, []);

    return (
        <div style={{ fontSize: "1.6vw", overflow: "hidden", whiteSpace: "nowrap", padding: "0px", margin: "0px"
        ,width: "95.5vw", fontFamily: "monospace", wordSpacing: "-.7vh"}} id="tickerBar">
        </div>
    );
}