import { useState, useEffect } from "react";
import moment from "moment";
import 'moment/locale/it';
import WeatherCard from "../components/WeatherCard/WeatherCard";

const Homepage = () => {

    console.log("RENDER HOMEPAGE");

    const [weather, setWeather] = useState([]);

    const url = "https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=45.25739202&lon=8.85923765";

    useEffect(
        ()=> {
            fetch(url)
            .then(res => res.json())
            .then((data) => 
            {
                console.log(data);
                setWeather(data.properties.timeseries);
                console.log(weather);
            }).catch(console.error);;
        },
    []);

    const getDataFormat = (time) =>{
        // 20XX-0X-XXT0X:0X:00X -----to----> ddd - DD - H - mm 
        // ven 13 marzo - 15:00
        moment.locale('it');
        time = moment(time).format("dddd DD MMMM - H:mm")
        return time;
    }

    return(
        <div>
            <h1>Meteo di oggi</h1>
            {weather.length &&
                weather.slice(0, 2).map(({time, data}) => 
                <WeatherCard key={time}
                    image={data.next_1_hours.summary.symbol_code}
                    time={getDataFormat(time)} 
                    wind_speed={data.instant.details.wind_speed}
                    air_temperature={data.instant.details.air_temperature}
                />)
            }
        </div>
    );
}

export default Homepage;