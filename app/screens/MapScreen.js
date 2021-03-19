import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import AppText from '../components/AppText';

function MapScreen({navigation}) {
    return (
        <View style={styles.container}>
            <AppText>The Map Screen</AppText>
            <Button onPress = {() => navigation.navigate("Weather")} title="Picked location and return to Weather."></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default MapScreen;