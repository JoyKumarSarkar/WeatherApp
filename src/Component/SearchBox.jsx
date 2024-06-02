import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';


export default function SearchBox({ updateInfo }) {

    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather?";
    const API_KEY = "969750eb24cc41c413ff8ac518c1ff5b";

    let getWeatherInfo = async () => {
        try {
            let responce = await fetch(`${API_URL}q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponce = await responce.json();

            console.log (jsonResponce);

            let result = {
                city: city,
                temp: jsonResponce.main.temp,
                feelsLike: jsonResponce.main.feels_like,
                pressure: jsonResponce.main.pressure,
                tempMin: jsonResponce.main.temp_min,
                tempMax: jsonResponce.main.temp_max,
                humidity: jsonResponce.main.humidity,
                feelsLike: jsonResponce.main.feels_like,
                weather: jsonResponce.weather[0].description,
                windSpeed: jsonResponce.wind.speed,
            }
            console.log(result);
            return result;
        } catch (err) {
            throw err;
        }
    };



    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        } catch (err) {
            setError (true);
        }
    };

    return (
        <div className="search" >
            <h2>Search weather by city name</h2>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="city name" variant="outlined" required value={city} onChange={handleChange} />
                <Button variant="contained" type="submit">search</Button>

                {error && <p style={{color: "red"}}>Data of searched place is not available in our API</p> }
            </form>

        </div>
    )
}