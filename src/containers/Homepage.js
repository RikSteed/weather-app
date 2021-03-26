import { useState, useEffect } from "react";
import moment from "moment";
import 'moment/locale/it';
import './Homepage.css';
import WeatherCard from "../components/WeatherCard/WeatherCard";

const Homepage = () => {

    const [weather, setWeather] = useState([]);
    const [days, setDay] = useState({});

    const url = "https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=45.25739202&lon=8.85923765";

    const getData = () => {
        return fetch(url)
        .then(res => res.json());
    }


    useEffect(
        ()=> {
            getData()
            .then((data) => 
            {
                setWeather(data.properties.timeseries);

                // Data finale -> Giorni -> Ore -> Meteo
                weather.splice(0,50).reduce((days, data) => {
                    const day = days[getDayFormat(data.time)];
                    if(day && day.length){
                        day.push({day: day, time: getHoursFormat(data.time), data: data.data})
                    }else{
                        days[getDayFormat(data.time)] = [{time: getHoursFormat(data.time), data: data.data}] ;
                    }
                    setDay(days);
                    return days;
                }, {});
                console.log(days);
                
            }).catch(console.error);;
        },
    []);

    const getDayFormat = (time) =>{
        moment.locale('it');
        time = moment(time).format("dddd DD MMMM");
        return time;
    }

    const getHoursFormat = (hours) =>{
        // 20XX-0X-XXT0X:0X:00X -----to----> ddd - DD - H - mm 
        // ven 13 marzo - 15:00
        moment.locale('it');
        hours = moment(hours).format("H:mm")
        return hours;
    }

    return(
        <div className="homepage">
            <h1>Meteo di oggi</h1>

            {/* WeatherCard modificata - EXPAND con Accordion*/}


            {/* Meteo Totale - FUNZIONANTE */}
            {weather.length &&
                weather.slice(0, 1).map(({time, data}) => 
                <WeatherCard key={time}
                    image={data.next_1_hours.summary.symbol_code}
                    time={getDayFormat(time)} 
                    wind_speed={data.instant.details.wind_speed}
                    air_temperature={data.instant.details.air_temperature}
                />)
            }
        </div>
    );
}

export default Homepage;