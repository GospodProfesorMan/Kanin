import { useEffect, useReducer, useState } from "react";
import SchoolHourService from "../services/SchoolHoursService";

export default function CountdownTimer() {
    
    const [hours, setHours] = useState()
    const [hourIndex, setHourIndex] = useState()

    function reducer(state, action) {
        if (typeof action === 'number') return action
        if (state === 1) {setHourIndex(hourIndex+1); return hours[hourIndex+1]*60}
        else return state-1
    }

    const [clock, dispatch] = useReducer(reducer, 61)

    useEffect(() => {
        SchoolHourService.getSchoolHours().then(res => {
            if (typeof res === "string") {
                setHours([1440])
                setHourIndex(0)
                dispatch(1440*60)
                console.log(res);
            }
            setHours(res)
            const rn = new Date()
            let rnMinutes = rn.getHours()*60 + rn.getMinutes()
            for (let i = 0; i < res.length; i++) {
                rnMinutes -= res[i]
                if (rnMinutes < 0) {
                    setHourIndex(i)
                    dispatch((Math.abs(rnMinutes)*60)-rn.getSeconds())
                    break
                }
            }
        })
        setInterval(() => {dispatch()}, 1000)
    }, [])

    return (
        <h1 style={{
            width: "10vw",
            textAlign: "center",
        }} >
            {`${('0' + Math.floor((clock - (clock % 60)) / 60)).slice(-2)}:${('0' + clock % 60).slice(-2)}`}
        </h1>
    );
}
