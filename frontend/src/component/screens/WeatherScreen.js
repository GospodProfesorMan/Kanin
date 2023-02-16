import {useEffect, useState} from "react";

export default function WeatherBig() {
    let [day, setDay] = useState()

    useEffect(() => {
        let curday = day
        setInterval(() => {
            setDay(() => {
                if (curday == 0) {
                    console.log(day);
                    return 1;
                }
                else if (curday == 1) {
                    console.log(day);
                    return 2;
                }
                else if (curday == 2) {
                    console.log(day);
                    return 3;
                }
                else if (curday == 3) {
                    console.log(day);
                    return 4;
                }
                else if (curday == 4) {
                    console.log(day);
                    return 5;
                }
                else if (curday == 5) {
                    console.log(day);
                    return 0;
                }
                // return (day + 1) % 5;
            });
        }, 10000);
    }, []);

    // const interval = setInterval(() => {
    //     setDay(() => {
    //         return (day + 1) % 5;
    //     });
    //     console.log(day);
    // }, 10000);

    if (day == undefined){
        day = 0;
    }

    let url = "https://vreme.arso.gov.si/napoved/Ljubljana/graf/" + day + "?interval3h=true";

    return (
        <div className={"overflow-hidden"}>
            <div className={"row"} style={{
                scale: "1.15",
                position: "relative",
                left: "145px",
                top: "80px",
                backgroundColor: "#0082bc"
            }}>
                <div style={{
                    width: "1813px",
                    height: "1100px",
                    overflow: "hidden",
                    position: "relative",
                    left: "-130px"
                }}>
                    <iframe src={url} id={"iframe"} style={{
                        width: "2500px",
                        height: "925px",
                        position: "relative",
                        top: "-290px",
                        left: "-400px"
                    }}></iframe>
                </div>
            </div>
        </div>) ;
}