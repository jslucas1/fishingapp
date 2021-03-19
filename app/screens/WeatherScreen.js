import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import AppText from '../components/AppText';

function WeatherScreen({navigation}) {
    return (
        <View style={styles.container}>
            <AppText>This is my weather screen</AppText>
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