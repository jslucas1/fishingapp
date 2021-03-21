import getData from './client';
import settings from '../config/settings';

const getWeather = (lat, lon, setData) => {
    const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={minutely,alerts}&appid=${settings.API_KEY}`;
    getData({URL: URL, cacheKey: "weatherdata", setData: setData});
}




export default {
    getWeather
};