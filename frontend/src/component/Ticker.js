import { useEffect, useState } from "react";

import TickerService from "../services/TickerService";

export default function Ticker() {
    let [ticker, setTicker] = useState("");

    useEffect(() => {
        async function setTick() {
            if (ticker.length < 130) {
                let t = (await TickerService.getTicker()).ticker
                setTicker((tick) => { return tick + ' || ' + t });
            }
        }
        setTick();
    }, [ticker]);

    useEffect(() => {
        setInterval(() => {
            setTicker((tick) => { return tick.substring(1) });
        }, 750);
    }, []);

    return (
        <p style={{ fontSize: "1.6vw", overflow: "hidden", whiteSpace: "nowrap", padding: "0px", margin: "0px", width: "95.5vw", fontFamily: "monospace", wordSpacing: "-.7vh", textOverflow: "revert-layer" }}>
            {ticker.slice(0, 130)}
        </p>
    );
}