import Constants from 'expo-constants';

const settings = {
    dev: {
        weatherUrl: 'http://api.openweathermap.org/data/2.5/weather',
        API_KEY: '5c2b27870a5e798c0a626e77dd54dc65'
    },
    staging: {
        weatherUrl: 'http://api.openweathermap.org/data/2.5/weather',
        API_KEY: '5c2b27870a5e798c0a626e77dd54dc65'
    },
    prod: {
        weatherUrl: 'http://api.openweathermap.org/data/2.5/weather',
        API_KEY: '5c2b27870a5e798c0a626e77dd54dc65'
    }
}

const getCurrentSettings = () => {
    if(__DEV__) return settings.dev;
    if(Constants.manifest.releaseChannel === 'staging') return settings.staging;
    return settings.prod;
}

export default getCurrentSettings();