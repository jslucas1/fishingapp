import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WeatherScreen from '../screens/WeatherScreen';
import MapScreen from '../screens/MapScreen';

const Stack = createStackNavigator();

const WeatherNavigator = ({navigation}) => (
    <Stack.Navigator>
        <Stack.Screen name="Weather" component={WeatherScreen} />
        <Stack.Screen 
            name="Map" 
            component={MapScreen} 
        />
    </Stack.Navigator>
)

export default WeatherNavigator;