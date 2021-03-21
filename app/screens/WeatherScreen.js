import React, { useEffect, useState, useContext } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import AppText from '../components/AppText';
import weatherApi from '../api/weather';
import LocationContext from '../location/context';

function WeatherScreen({navigation}) {
    var location = useContext(LocationContext);
    console.log("location", location);
    const [weatherData, setWeatherData] = useState();
    useEffect(()=> {
        weatherApi.getWeather(location.userLoc.coords.latitude, location.userLoc.coords.longitude, setWeatherData);
    }, []);

    if(!weatherData) return null;

    return (
        
        <View style={styles.container}>
            <AppText>This is my weather screen {weatherData.current.temp} </AppText>
            <Button onPress = {() => navigation.navigate("Map")} title = "Go pick another location"></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1

    }
})

export default WeatherScreen;