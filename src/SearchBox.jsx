import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city, setcity]=useState("");
    let [error, setError]=useState(false);

    
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="39a234508f3c4ea3ab3e89d9e065355d";

    let getWeatherInfo=async()=>{
        
      try {
        let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
        let jsonResponse=await response.json();
        console.log(jsonResponse);

        let result={
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        }

        console.log(result);
        return result;
      } catch (err) {
      
        throw err;
        
      }
        
    };


    let handleChange=(event)=>{
        setcity(event.target.value);
    }

    let handleSubmit=async (evt)=>{
       try {
        evt.preventDefault();
        console.log(city);
        setcity("");
        let newinfo=await getWeatherInfo();
        updateInfo(newinfo);
       } catch (err) {
        setError(true);
       }
       
    }

    return(
        <div className="SearchBox">
             <h2>Search for the Weather!</h2>
            <form onSubmit={handleSubmit}>
            <TextField id="outlined-basic" label="City Name" variant="outlined" required value={city} onChange={handleChange}/><br /><br />
            <Button variant="contained" type='submit'>Search</Button>
            {error && <p style={{color:"red"}}>No such place exist!</p>}
            
             <br /> &nbsp;
            </form>
        </div>
    );
}