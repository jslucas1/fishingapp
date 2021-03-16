import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import LocationContext from './app/location/context';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AppLoading from 'expo-app-loading';
import locationStorage from './app/location/storage';
import Screen from './app/components/Screen';

export default function App() {

  const [userLoc, setUserLoc] = useState();
  const [isReady, setIsReady] = useState(false);

  const getLocation = async () => {
    const tempLocation = await locationStorage.getLocation();
    setUserLoc(tempLocation);
    console.log("in the get location", tempLocation);
  }

  if(!isReady){
    return <AppLoading startAsync={getLocation} onError={console.warn} onFinish={() => setIsReady(true)} />
  }

  return (
    <LocationContext.Provider value={{userLoc, setUserLoc}}>
      {/* <View style={styles.container}>
        <WelcomeScreen />  
      </View> */}
      <Screen>
        <WelcomeScreen />
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
