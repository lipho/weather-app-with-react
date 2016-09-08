import secret from '../../secret'

const wtrUrlBase = `api.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml`;
const API_KEY = secret;

export function fetchWeather() {
 return {
   type: FETCH_WEATHER
 };
}