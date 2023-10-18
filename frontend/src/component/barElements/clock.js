import { useEffect, useState } from "react";

export default function Clock() {
    const [clock, setClock] = useState("0:00");

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

    return <div>{clock}</div>
}
//not best practice