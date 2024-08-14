import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";


export default function WeatherApp(){

    let [weatherInfo, setweatherInfo]=useState({
        city:"Delhi",
        feelsLike: 309.2,
        humidity: 94,
        temp: 302.2,
        tempMax: 302.2,
        tempMin: 302.2,
        weather: "mist",
    });

    let updateInfo=(newinfo)=>{
        setweatherInfo(newinfo);
    }

  return(
    <div>
       
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
    </div>
  );
}