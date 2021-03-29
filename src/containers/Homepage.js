import { useState, useEffect } from "react";
import moment from "moment";
import 'moment/locale/it';
import './Homepage.css';
import WeatherCard from "../components/WeatherCard/WeatherCard";

const Homepage = () => {

    console.log("RENDER HOMEPAGE");

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
                const days = weather.splice(0,50).reduce((days, data) => {
                    const day = days[getDayFormat(data.time)];
                    if(day && day.length){
                        day.push({time: getHoursFormat(data.time), data: data.data})
                    }else{
                        days[getDayFormat(data.time)] = [{time: getHoursFormat(data.time), data: data.data}] ;
                    }
                    return days;
                }, {});
                setDay(days);
                setTimeout(() => console.log(Object.keys(days)), 1000);             
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
            <h1>Meteo</h1>
            {/* Meteo Totale - FUNZIONANTE */}
            {
            (Object.keys(days).length>0) &&
                Object.keys(days).map((date) => 
                <WeatherCard 
                    key={date}
                    time={date}
                    data = {days[date]}
                />
                )
            }
        </div>
    );
}

export default Homepage;