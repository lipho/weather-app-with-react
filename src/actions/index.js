import secret from '../../secret'
import axios from 'axios';
const API_KEY = secret;

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

const FETCH_WEATHER = 'FETCH_WEATHER';

/**
 * Sents a get request to open
 * @param city
 * @returns {{type: string}} - action.
 */
export function fetchWeather(city) {
  const url =`${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
 return {
   type: FETCH_WEATHER,
   payload: request
 };
}