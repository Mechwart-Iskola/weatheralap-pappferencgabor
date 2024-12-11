import { WeatherType } from "../type/Weather";

export const fetchWeather = async () => {
    try {
        const response = await fetch(`/Weather.json`)
        if (!response.ok) {
            throw new Error;
        }
        const data = await response.json();
        console.log(data.weather);
        return data.weather;
    } catch (error) {
        console.error(error);
        return undefined;
    }
}