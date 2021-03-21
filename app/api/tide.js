import getData from './client';

const getTides = (station, beginDate, endDate, setData) => {
    const URL = `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?begin_date=${beginDate}&end_date=${endDate}&station=${station}&product=predictions&datum=STND&time_zone=gmt&interval=hilo&units=english&format=json`;
    getData({URL: URL, cacheKey: "tidedata", setData: setData});
}

export default {
    getTides
};