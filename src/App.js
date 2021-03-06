import React, { useState, useEffect } from "react";

import "./App.css";
import Map from "./component/map";
import Weathercard from "./component/weathercard";

function App() {
	const [searchValue, setSearchValue] = useState("ahmedabad");
	const [tempInfo, setTempInfo] = useState("");
	const getWeatherInfo = async () => {
		try {
			// let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=cfe5fbf9f63f5bb13c544b436ab0e641`;
			let url = `https://api.weatherapi.com/v1/current.json?key=9083e95bcb8d49ddb4a50057221406&q=${searchValue}&aqi=yes`;
			const res = await fetch(url);
			const data = await res.json();

			// const { temp, humidity, temp_min, temp_max, feels_like } = data.main;
			// const { main: weathermood, description, icon } = data.weather[0];
			// const { country, sunrise, sunset } = data.sys;
			// const { name, timezone } = data;
			// const { speed } = data.wind;

			const { name, region, country, localtime } = data.location;
			const { last_updated, temp_c, wind_kph, humidity, feelslike_c, uv } =
				data.current;
			const { text, icon } = data.current.condition;

			const localtimedata = localtime;
			const localtimeSlice = localtimedata.substr(localtimedata.length - 5);
			const tConvert = (time)=>{
				// Check correct time format and split into components
				time = time
				.toString()
				.match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

				if (time.length > 1) {
				// If time format correct
				time = time.slice(1); // Remove full string match value
				time[5] = +time[0] < 12 ? " AM" : " PM"; // Set AM/PM
				time[0] = +time[0] % 12 || 12; // Adjust hours
				}
				return time.join(""); // return adjusted time or original string
			}
			const getlocaltimedata = tConvert(localtimeSlice);
			
			

			// const myNewWeatherInfo = { temp, humidity, temp_min, temp_max, country, sunrise, sunset, name, timezone, weathermood, speed, description, feels_like, icon };
			const myNewWeatherInfo = { name, region, country, localtime, last_updated, temp_c, wind_kph, humidity, feelslike_c, uv, icon, text, localtimeSlice, getlocaltimedata, };
			setTempInfo(myNewWeatherInfo);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		getWeatherInfo();
	}, []);

	return (
		<>
			<Map />
			<div className="mb-6 flex mt-4">
				<input
					type="search"
					id="search"
					name="search"
					placeholder="Search"
					autoComplete="false"
					value={searchValue}
					className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-lg rounded-tr-none rounded-br-none capitalize"
					onChange={(e) => setSearchValue(e.target.value)}
				/>
				<button
					className="flex mx-auto text-white bg-indigo-500 border-0 items-center justify-center py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-lg rounded-none w-16 rounded-lg rounded-tl-none rounded-bl-none"
					onClick={getWeatherInfo}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						x="0px"
						y="0px"
						width="30"
						height="30"
						viewBox="0 0 30 30"
						fill="#fff">
						<path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
					</svg>
				</button>
			</div>
			<Weathercard tempInfo={tempInfo} />
		</>
	);
}

export default App;
