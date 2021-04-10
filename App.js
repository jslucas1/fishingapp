import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import LocationContext from './app/location/context';
import AppLoading from 'expo-app-loading';
import locationStorage from './app/location/storage';
import Screen from './app/components/Screen';
import AppNavigator from './app/navigation/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import navigationTheme from './app/navigation/navigationTheme';

export default function App() {

  const [userLoc, setUserLoc] = useState();
  const [isReady, setIsReady] = useState(false);

  const getLocation = async () => {
    const tempLocation = await locationStorage.getLocation();
    setUserLoc(tempLocation);
    const tempAddressLookup = {
      latitude: tempLocation.coords.latitude,
      longitude: tempLocation.coords.longitude
    }

    const tempAddress = await locationStorage.getAddress(tempAddressLookup);
    console.log("this should be my address", tempAddress);    
  }

  if(!isReady){
    return <AppLoading startAsync={getLocation} onError={console.warn} onFinish={() => setIsReady(true)} />
  }

  return (
    <LocationContext.Provider value={{userLoc, setUserLoc}}>
      <Screen>
        <NavigationContainer theme={navigationTheme}>
          <AppNavigator />
        </NavigationContainer>
      </Screen>
    </LocationContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
