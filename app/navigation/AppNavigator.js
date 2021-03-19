import React from 'react';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WelcomeScreen from '../screens/WelcomeScreen';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import SafetyScreen from '../screens/SafetyScreen';
import WeatherNavigator from '../navigation/WeatherNavigator';


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
        {/* <Tab.Screen 
            name="Weather" 
            component={WeatherScreen} 
            options = {({navigation, route}) => ({
                tabBarButton: () => 
                    <NewListingButton 
                        onPress={() => navigation.navigate("ListingEdit")}
                />,
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="plus-circle" color={color} size={size} />
                ),
            })}
        /> */}
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
    </Tab.Navigator>
)

export default AppNavigator;