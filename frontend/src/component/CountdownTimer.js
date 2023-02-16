import { useEffect, useState } from "react";
import SchoolHourService from "../services/SchoolHoursService";

function parseTime(timeArray) {
    const date = new Date();
    date.setHours(timeArray[0], timeArray[1], timeArray[2] || 0);

    return date;
}

export default function CountdownTimer() {
    const [timer, setTimer] = useState(0);
    useEffect(() => {
        async function Timer() {
            let times = await SchoolHourService.getSchoolHours();
            for (let i = 0; i < times.length; i++) {
                let time = parseTime(times[i].ura.split(".")[0].split(":"));
                if (Math.abs(time - Date.now()) < 300000) {
                    console.log(times[i].nacin, time-Date.now()>0)
                    switch (times[i].nacin) {
                        case "ura":
                            if ((time - Date.now()) < 0) {
                                setTimer(time);
                            };
                            break;
                        case "odmor":
                            if ((time - Date.now()) > 0) {
                                setTimer(time);
                                setTimeout(setTimer(0), timer);
                            }
                            break;
                        case "oboje":
                            setTimer(time);
                            break;
                        default:
                            setTimer(0);
                            break;
                    }
                    return;
                }
            }
            setTimer(0);
        }
        setInterval(async function () {
            Timer();
        }, 5000);

    }, []);

    let clock = Math.floor((timer - Date.now()) / 1000);

    return (
        <h1 style={{
            color: clock > 0 ? "green" : "red",
            width: "10vw",
            textAlign: "center",
            visibility: 0 < Math.abs(clock) && Math.abs(clock) < 300 ? "visible" : "hidden"
        }} >
            {`${('0' + Math.floor(Math.abs(clock / 60))).slice(-2)}:${('0' + Math.abs(clock % 60)).slice(-2)}`}
        </h1>
    );
}
