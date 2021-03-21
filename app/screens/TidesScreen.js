import React, {useState, useEffect} from 'react';
import { StyleSheet } from 'react-native';
import TideDetails from '../components/TideDetails';
import Screen from '../components/Screen';
import tideApi from '../api/tide';
 
export default function TidesScreen({route}) {
    const theStation = route.params;
    //let station = theStation.stationnumber;
    let station = 8735180;
    let beginDate= '20210321';
    let endDate = '20210323';


    const [tideData, setTideData] = useState();

    useEffect(()=> {
        tideApi.getTides(station, beginDate, endDate, setTideData);
    }, []);
 
   
    if(!tideData) return null;

 
    return (
        <Screen style={styles.container}>
                      
            {tideData.predictions.map((data)=> {
                return (
                    <TideDetails 
                        key= {data.t}
                        station={station}
                        time={data.t}
                        type={data.type}
                        tide={data.v}
                    />
                )
            })}
        </Screen>
    );
}
 
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})