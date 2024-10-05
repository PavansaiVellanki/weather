import "../component-styles/Weather.css";
import Location from "../assets/location.png";
import TimeZone from "../assets/time-zones.png";
import Description from "../assets/description.png";
import Temperature from "../assets/temperature.png";
import Humidity from "../assets/humidity.png";
import Pressure from "../assets/pressure-gauge.png";
import Visibility from "../assets/visibility.png"
import Arrow from "../assets/right-arrow.png";
import Sunrise from "../assets/sunrise.png";
import Sunset from "../assets/sun.png";
import UV from "../assets/uv-index.png";
import Wind from "../assets/wind.png";
import Clearsky from "../assets/clear_sky_day.png";
import Snow from "../assets/snowflake.png";
import SnowNight from "../assets/night-snow.png";
import Thunderstrom from "../assets/thunder_strom.png";
import ThunderstromNight from "../assets/strom.png";
import Rain from "../assets/heavy_rain.png";
import NightRain from "../assets/thunder.png";
import Fog from "../assets/mist.png";
import Cloudy from "../assets/cloudy.png";
import CloudyNight from "../assets/cloudy-night.png";
import Night from "../assets/night.png";

function Weather({data}) {
    const address = data.resolvedAddress.split(", ");


    const weather_icons = {};
    
    const icons_description = [
        "snow",
        "snow-showers-day",
        "snow-showers-night",
        "thunder-rain",
        "thunder-showers-day",
        "thunder-showers-night",
        "rain",
        "showers-day",
        "Rain",
        "showers-night",
        "fog",
        "wind",
        "cloudy",
        "partly-cloudy-day",
        "partly-cloudy-night",
        "clear",
        "clear-day",
        "clear-night",
    ];

    const weather_icon_image = [
        Snow,
        Snow,
        SnowNight,
        Thunderstrom,
        Thunderstrom,
        ThunderstromNight,
        Rain,
        Rain,
        NightRain,
        Rain,
        Fog,
        Wind,
        Cloudy,
        Cloudy,
        CloudyNight,
        Clearsky,
        Clearsky,
        Night
    ];

    icons_description.forEach((icon,image)=>{
        weather_icons[icon] = weather_icon_image[image]
    });

    const forecastElements = [];
    for(let i = 0; i < 15; i++){
        forecastElements.push(
            <div className="elements">
                <img src={weather_icons[data.days[i].icon]} className="forecast_icon"/>
                <p>{data.days[i].temp} &deg;c</p>
                <p className="conditions">{data.days[i].conditions}</p>
                <div>
                <p className="date">{data.days[i].datetime.split("-").reverse().join("-")}</p>
                </div>
            </div>
        )
    }

    return (
        <div className={`container ${data.currentConditions.icon}`}>
            <div className="row">
                <h1 className="current_location">{address[0]}, {address[address.length-1]}</h1>
                <div className="sub_section">
                    <span>
                        <img src={TimeZone} alt="Time zone"  />
                        <p className="time_zone">Time-Zone - {data.timezone}</p>
                    </span>
                
                    <span>
                        <img src={Location} alt="Location pin"/>
                        <p>Latitude - {data.latitude}, Longitude - {data.longitude}</p>
                    </span>
                </div>
                <span className="desc">
                    <img src={Description} alt="Weather description" />
                    <p>{data.days[0].description}</p>
                </span>
            </div>
            
            <div className="main_page">
                <div className="main_content">
                    <h1 className="temperature">
                        <img src={Temperature} alt="Temperature"/>
                        {data.currentConditions.temp} &deg;C
                    </h1>

                    <span>
                        <img src={Temperature} alt="Feels like" />
                        <p>Feels like - {data.currentConditions.feelslike} &deg;C</p>
                    </span>
                
                    <span>
                        <img src={Humidity} alt="Humidity"/>
                        <p>Humidity - {data.currentConditions.humidity} %</p>
                    </span>

                    <span>
                        <img
                            src={weather_icons[data.currentConditions.icon]} 
                            alt="Weather icon" 
                        />
                        <p className="condition">Condition - {data.currentConditions.conditions}</p>
                    </span>
                    <span>
                        <img
                            src={Temperature} 
                            alt="Weather icon" 
                        />
                        <p className="condition">Max temperature - {data.days[0].tempmax} &deg;c</p>
                    </span>
                    <span>
                        <img
                            src={Temperature} 
                            alt="Weather icon" 
                        />
                        <p className="condition">Min temperature - {data.days[0].tempmin} &deg;c</p>
                    </span>

                </div>

                <div className="main_content">
                    <span>
                        <img src={Pressure} alt="Pressure icon" />
                        <p>Pressure - {data.currentConditions.pressure}</p>
                    </span>

                    <span>
                        <img src={Visibility} alt="Visibility icon" />
                        <p>Visibility - {data.currentConditions.visibility} Km</p>
                    </span>
                    
                    <span>
                        <img src={Wind} alt="Wind icon" />
                        <p>Wind speed - {data.currentConditions.windspeed} Km/h</p>
                    </span>

                    <span>
                        <img src={Arrow} alt="Arrow icon" 
                            style={{ transform: `rotate(${data.currentConditions.winddir || 0}deg)` }}
                        />
                        <p>Wind direction - {data.currentConditions.winddir} &deg;</p>
                    </span>

                    <span>
                        <img src={UV} alt="Uv index icon" />
                        <p>UV index - {data.currentConditions.uvindex}</p>
                    </span>
                </div>

                <div className="additional_content">

                    <span>
                        <img src={Wind} alt="wind gust icon" />
                        <p>Wind gust - {data.currentConditions.windgust}</p>
                    </span>

                    <span>
                        <img src={Cloudy} alt="cloud cover icon" />
                        <p>Cloud cover - {data.currentConditions.cloudcover}</p>
                    </span>

                    <span>
                        <img src={Night} alt="moon ohase icon" />
                        <p>Moon phase - {data.currentConditions.moonphase} </p>
                    </span>

                    <span>
                        <img src={Sunrise} alt="Sunrise icon" />
                        <p>Sunrise - {data.currentConditions.sunrise} AM</p>
                    </span>
                    
                    <span>
                        <img src={Sunset} alt="Sunset icon" />
                        <p>Sunset - {data.currentConditions.sunset} PM</p>
                    </span>
                </div>
            </div>

            <h1 className="section_title">15 days Forecast</h1>
            <div className="forecast">
                {forecastElements}
            </div>

        </div>
    );
}
export default Weather;