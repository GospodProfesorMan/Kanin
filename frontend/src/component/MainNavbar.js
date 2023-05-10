import { useEffect, useState } from "react";

import logo from "../assets/img/logo.svg";
import CONFIG from '../config'
import CountdownTimer from "./CountdownTimer";

export default function MainNavbar() {
    const [clock, setClock] = useState("");

    useEffect(() => {
        setInterval(() => {
            let time = new Date();
            setClock(
                ('0' + time.getHours()).slice(-2)
                + ":" +
                ('0' + time.getMinutes()).slice(-2)
                + ":" +
                ('0' + time.getSeconds()).slice(-2)
            );
        }, 1000);
    });

    return (
        <div className="main_nav" style={{ backgroundColor: (CONFIG.darkmode ? "#333333" : "#ffffff") }}>
            {/* <img src={logo} alt="Vegova logo" className="logo"/> */}
            <div className="logo" style={{backgroundImage:"url("+logo+")"}}></div>
            <CountdownTimer />
            <div style={{color: (CONFIG.darkmode ? "#ffffff" : "#000000")}}>{clock}</div>
        </div>
    );
}