import styles from './App.module.css'
import { WeatherType } from './type/Weather'
import { fetchWeather } from './services/WeatherService'
import { useEffect, useState } from 'react'

function App() {
	const [weatherData, setWeatherData] = useState<WeatherType[] | undefined>()
	const [weather, setWeather] = useState<WeatherType | undefined>()
	const [searchQuery, setSearchQuery] = useState("");

	useEffect(() => {
		fetchWeather().then(res => setWeatherData(res))
	}, [])

	const findWeather = async(query: string) => {
		const finder = weatherData?.find((w) => w.cityName.toLowerCase() == query.toLowerCase());
		console.log(finder);
		setWeather(finder);
	}

	return (
		<div className={styles.container}>
			<div className={styles.search}>
				<input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}  />
				<button onClick={() => findWeather(searchQuery)}>Search</button>
			</div>
			{
				weather ? 
				<div className={styles.result}>
					<img src={weather?.icon} className={styles.weatherIcon} alt="weather" />
					<p>City: {weather?.cityName}</p>
					<p>Temperature: {weather?.temperature}°C</p>
					<p>Weather: {weather?.weather}</p>
				</div> :
				<div className={styles.result}>
					<p>No weather data found for the given city.</p>
				</div>
			}
		</div>
	)
}

export default App
