import axios from 'axios';    

const API_KEY="1325d85ebb60adfa9acc34f1e1b97139";
const ROOT_URL=`https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export function fetchWeather(city) {
    const url=`${ROOT_URL}&q=${city},india`     //with the help of redux promise the async function looks like sync 
    const request=axios.get(url)              //return a promise
    
    return {
        type:'FETCH_WEATHER',
        payload:request
    }

}