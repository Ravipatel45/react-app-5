import React from "react";

const Weathercard = ({ tempInfo }) => {
	const { temp, humidity, temp_min, temp_max, country, sunrise, sunset, name, timezone, weathermood, speed, feels_like } = tempInfo;
	const month = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	const weekday = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];

	const d = new Date();
	let localeTime = d.toLocaleTimeString([], {
		hour: "2-digit",
		minute: "2-digit",
	});
	let monthName = month[d.getMonth()];
	let date = d.getDate();
	let year = d.getFullYear();
	let day = weekday[d.getDay()];
	let sec = sunrise;
	let dates = new Date(sec * 1000);
	let sunriseTime = dates.toLocaleTimeString([], {
		hour: "2-digit",
		minute: "2-digit",
	});
	let sec2 = sunset;
	let sec2dates = new Date(sec2 * 1000);
	let sunsetTime = sec2dates.toLocaleTimeString([], {
		hour: "2-digit",
		minute: "2-digit",
	});

	return (
		<>
			<div className="card mx-auto w-full max-w-2xl mb-4 rounded-lg p-10">
				<div className="card__info">
					<p className="card__info__place">
						{name}, <span className="text-pink-600 font-bold">{country}</span>
					</p>
					<p className="card__info__time">{localeTime}</p>
					<p className="card__info__date">
						{monthName} {date}.{year} | {day}
					</p>
				</div>
				<div className="card__weather">
					<i className="wi wi-night-sleet text-indigo-700"></i>
					<p className="card__weather__temp">{temp} C</p>
				</div>
			</div>

			<div className="flex flex-wrap mx-auto w-full max-w-2xl">
				<div className="p-2 sm:w-1/2 w-full">
					<div className="bg-gray-100 rounded flex p-4 h-full items-center">
						<i className="wi wi-sunrise text-indigo-700 mr-3"></i>
						<span className="title-font font-medium">
							Sunrise time : <span className="font-bold">{sunriseTime}</span>
						</span>
					</div>
				</div>
				<div className="p-2 sm:w-1/2 w-full">
					<div className="bg-gray-100 rounded flex p-4 h-full items-center">
						<i className="wi wi-sunset text-indigo-700 mr-3"></i>
						<span className="title-font font-medium">
							Sunset time : <span className="font-bold">{sunsetTime}</span>
						</span>
					</div>
				</div>
				<div className="p-2 sm:w-1/2 w-full">
					<div className="bg-gray-100 rounded flex p-4 h-full items-center">
						<i className="wi wi-night-sleet text-indigo-700 mr-3"></i>
						<span className="title-font font-medium">
                        Weathermood : <span className="font-bold">{weathermood}</span>
						</span>
					</div>
				</div>
				<div className="p-2 sm:w-1/2 w-full">
					<div className="bg-gray-100 rounded flex p-4 h-full items-center">
						<i className="wi wi-night-sleet wi wi-windy text-indigo-700 mr-3"></i>
						<span className="title-font font-medium">
							Wind speed : <span className="font-bold">{speed} m/s W</span>
						</span>
					</div>
				</div>
				<div className="p-2 sm:w-1/2 w-full">
					<div className="bg-gray-100 rounded flex p-4 h-full items-center">
						<i className="wi wi-humidity text-indigo-700 mr-3"></i>
						<span className="title-font font-medium">Humidity : <span className="font-bold">{humidity}%</span></span>
					</div>
				</div>
				<div className="p-2 sm:w-1/2 w-full">
					<div className="bg-gray-100 rounded flex p-4 h-full items-center">
						<i className="wi wi-cloud-refresh text-indigo-700 mr-3"></i>
						<span className="title-font font-medium">
                        temperature feels : <span className="font-bold">{feels_like}</span>
						</span>
					</div>
				</div>
				<div className="p-2 sm:w-1/2 w-full">
					<div className="bg-gray-100 rounded flex p-4 h-full items-center">
						<i className="wi wi-day-light-wind text-indigo-700 mr-3"></i>
						<span className="title-font font-medium">
							Min temperature : <span className="font-bold">{temp_min}</span>
						</span>
					</div>
				</div>
				<div className="p-2 sm:w-1/2 w-full">
					<div className="bg-gray-100 rounded flex p-4 h-full items-center">
						<i className="wi wi-day-cloudy-high text-indigo-700 mr-3"></i>
						<span className="title-font font-medium">
                        Max temperature : <span className="font-bold">{temp_max}</span>
						</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default Weathercard;
