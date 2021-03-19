import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text } from 'react-native';
import Portlet from '../components/Portlet';


function WelcomeScreen({navigation}) {
    return (
        <ImageBackground 
            blurRadius={1}
            style={styles.background}
            source={require('../assets/awibackground.jpg')}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/awilogo.jpg")}/>
                <Text style={styles.tagline}>Alabama Water Institute</Text>
            </View>
            <Portlet 
                title="Weather" 
                subTitle="Get your weather"
                onPress = {() => navigation.navigate("Weather")}
            />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",

        width: "100%"
    },
    buttonContainer:{
        padding: 20,
        width: "100%"
    },
    logo: {
        width: 150,
        height: 175,      
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: "center"
    },
    tagline: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20,
        color: 'white'
    }
})

export default WelcomeScreen;