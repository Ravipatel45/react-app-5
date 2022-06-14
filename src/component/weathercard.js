import React from "react";

const Weathercard = ({ tempInfo }) => {
	const { name, region, country, localtime, last_updated, temp_c, wind_kph, humidity, feelslike_c, uv, icon, text, getlocaltimedata, } = tempInfo;
	
	// const month = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ];
	// const weekday = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", ];

	// const d = new Date();
	// let localeTime = d.toLocaleTimeString([], {
	// 	hour: "2-digit",
	// 	minute: "2-digit",
	// });
	// let monthName = month[d.getMonth()];
	// let date = d.getDate();
	// let year = d.getFullYear();
	// let day = weekday[d.getDay()];
	// let sec = sunrise;
	// let dates = new Date(sec * 1000);
	// let sunriseTime = dates.toLocaleTimeString([], {
	// 	hour: "2-digit",
	// 	minute: "2-digit",
	// });
	// let sec2 = sunset;
	// let sec2dates = new Date(sec2 * 1000);
	// let sunsetTime = sec2dates.toLocaleTimeString([], {
	// 	hour: "2-digit",
	// 	minute: "2-digit",
	// });
	// let weatherImgUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`

	function padTo2Digits(num) {
		return num.toString().padStart(2, '0');
	  }
	  
	  function formatDate(date) {
		return [
		  padTo2Digits(date.getDate()),
		  padTo2Digits(date.getMonth() + 1),
		  date.getFullYear(),
		].join(':');
	  }
	  
	return (
		<>
			<div className="card mx-auto w-full max-w-2xl mb-4 rounded-lg p-10">
				<div className="card__info">
					<p className="card__info__place">
						{name}, <span className="text-pink-600 font-bold">{region},{country}</span>
					</p>
					<p className="card__info__time">{getlocaltimedata}</p>
					<p className="card__info__date">
					{formatDate(new Date(localtime))}
					</p>
				</div>
				<div className="card__weather">
					{/* <i className="wi wi-night-sleet text-indigo-700"></i> */}
					<img src={icon} alt="icon" />
					<p className="card__weather__temp">{temp_c}<sup>°</sup>C</p>
				</div>
			</div>

			<div className="flex flex-wrap mx-auto mb-10 w-full max-w-2xl">
				{/* <div className="p-2 sm:w-1/2 w-full">
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
				</div> */}
				<div className="p-2 sm:w-1/2 w-full">
					<div className="bg-gray-100 rounded flex p-4 h-full items-center">
						<i className="wi wi-night-sleet text-indigo-700 mr-3"></i>
						<span className="title-font font-medium">
							Weathermood : <span className="font-bold">{text}</span>
						</span>
					</div>
				</div>
				<div className="p-2 sm:w-1/2 w-full">
					<div className="bg-gray-100 rounded flex p-4 h-full items-center">
						<i className="wi wi-night-sleet wi wi-windy text-indigo-700 mr-3"></i>
						<span className="title-font font-medium">
							Wind speed : <span className="font-bold">{wind_kph} K/ph</span>
						</span>
					</div>
				</div>
				<div className="p-2 sm:w-1/2 w-full">
					<div className="bg-gray-100 rounded flex p-4 h-full items-center">
						<i className="wi wi-humidity text-indigo-700 mr-3"></i>
						<span className="title-font font-medium">
							Humidity : <span className="font-bold">{humidity}%</span>
						</span>
					</div>
				</div>
				<div className="p-2 sm:w-1/2 w-full">
					<div className="bg-gray-100 rounded flex p-4 h-full items-center">
						<i className="wi wi-cloud-refresh text-indigo-700 mr-3"></i>
						<span className="title-font font-medium">
							temperature feels :{" "}
							<span className="font-bold">{feelslike_c}</span>
						</span>
					</div>
				</div>
				{/* <div className="p-2 sm:w-1/2 w-full">
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
				</div> */}
			</div>
		</>
	);
};

export default Weathercard;
