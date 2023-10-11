import { useEffect, useReducer, useState } from "react";
import getSchoolHours from "../services/SchoolHoursService";

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
        getSchoolHours().then(res => {
            //this doesn't work properly. sethours is useless here
            if (typeof res === "string") {
                setHours([1440])
                setHourIndex(0)
                dispatch(1440*60)
            }
            setHours(res)
            const rn = new Date()
            let rnMinutes = rn.getHours()*60 + rn.getMinutes()
            for (let i = 0; i < res.length; i++) {
                rnMinutes -= res[i]
                if (rnMinutes < 0) {
                    setHourIndex(i)
                    dispatch((Math.abs(rnMinutes)*60)-rn.getSeconds())
                    rnMinutes = 1
                    break
                }
            }
            // if (rnMinutes !== 1) {
            //     setHourIndex(res.length-1)
            //     dispatch((Math.abs(rnMinutes)*60)-rn.getSeconds())
            // }
        })
        setInterval(() => {dispatch()}, 1000)
    }, [])

    return (
        <div>
            {((Math.floor(clock/3600)+':') !== "0:" ? Math.floor(clock/3600)+':' : "")
            +('0'+Math.floor(clock/60%60)).slice(-2)+':'
            +('0'+clock%60).slice(-2)}
        </div>
    );
}

//do smthing if hour index is too big
//do better error handling