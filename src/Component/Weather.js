import React from "react";


const Weather = props => (
	<div className="weather__info">
	 {	
	 	props.city && props.country && <p className="weather__key"> Location: 
	 		<span className="weather__value"> { props.city }, { props.country }</span>
	 	</p> 
	 }
	 { 	
	 	props.temperature && <p className="weather__key"> Temperature: 
	 		<span><img src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png" height="100px" width="100px"></img></span>
			<span className="weather__value"> { props.temperature }	</span>
	 	</p> 
	 }
	 { 	
	 	props.humidity && <p className="weather__key"> Humidity: 
	 		<span className="weather__value"> { props.humidity } </span>
	 	</p> 
	 }
	 { 	
	 	props.description && <p className="weather__key"> Conditions: 
	 		<span className="weather__value"> { props.description } </span>
	 </p> 
	 }
	 { 
	 	props.error && <p className="weather__error">{ props.error }</p>  
	 }
	</div>
);

export default Weather;