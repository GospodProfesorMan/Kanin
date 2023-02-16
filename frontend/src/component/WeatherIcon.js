import {useEffect, useState} from "react";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faCake,
    faCloudShowersHeavy,
    faSmog,
    faSnowflake,
    faSun,
    faThunderstorm,
    faWind
} from '@fortawesome/free-solid-svg-icons';

import WeatherService from "../services/WeatherService";

export default function WeatherIcon() {
    const [weatherIcon, setWeatherIcon] = useState(faCake);

    useEffect(() => {
        setInterval(() => {
            WeatherService.getWeather().then(weatherText => {
                const weatherMap = {
                    "sunny": faSun,
                    "rainy": faCloudShowersHeavy,
                    "foggy": faSmog,
                    "snowy": faSnowflake,
                    "thunderstormy": faThunderstorm,
                    "windy": faWind
                };

                if (weatherMap[weatherText] === undefined) {
                    setWeatherIcon(faCake);
                } else {
                    setWeatherIcon(weatherMap[weatherText]);
                }
            });
        }, 5000);
    }, []);

    return (
        <FontAwesomeIcon fontSize="4vh" icon={weatherIcon}/>
    );
}