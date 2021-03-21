import React from 'react';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WelcomeScreen from '../screens/WelcomeScreen';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import SafetyScreen from '../screens/SafetyScreen';
import WeatherNavigator from '../navigation/WeatherNavigator';
import TidesScreen from '../screens/TidesScreen';


const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen 
            name="Home" 
            component={WelcomeScreen} 
            options = {{
                tabBarIcon: ({color, size}) =>
                    <MaterialCommunityIcons name="home" color={color} size={size} />  
            }}
        />
        <Tab.Screen 
            name="Weather" 
            component={WeatherNavigator} 
            options = {({navigation}) => ({
                tabBarIcon: ({color, size}) =>(
                    <MaterialCommunityIcons name="weather-sunny" color={color} size={size} />
            ),
            })}
        />
        <Tab.Screen 
            name="Safety" 
            component={SafetyScreen} 
            options = {{
                tabBarIcon: ({color, size}) =>
                    <MaterialCommunityIcons name="safety-goggles" color={color} size={size} />
            }}
        />
        <Tab.Screen 
            name="Tide" 
            component={TidesScreen} 
            options = {{
                tabBarIcon: ({color, size}) =>
                    <MaterialCommunityIcons name="wave" color={color} size={size} />
            }}
        />
    </Tab.Navigator>
)

export default AppNavigator;