import * as Location from 'expo-location';

const key="userLoc";

const useLocation = async () => {

    try {
        const {granted} = await Location.requestPermissionsAsync();
        if(!granted){
          return;
        } else {
          return {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
        }   
    } catch (error) {
        console.log(error);
    }
}
const storeLocation = async (userLocation) => {
    try {
        await SecureStore.setItemAsync(key, userLocation)
    } catch(error){
        console.log('Error storing the user location', error);
    }
}

const getLocation = async () => {
    try{
        const currentLoc = await useLocation();
        if(currentLoc) return currentLoc
        else return await SecureStore.getItemAsync(key);

    } catch(error){
        console.log('Error getting the user Location', error);
    }
}

const removeLocation = async () => {
    try{
        await SecureStore.deleteItemAsync(key)
    } catch(error){
        console.log('Error removing the user Location', error)
    }
}

export default {storeLocation, removeLocation, getLocation}