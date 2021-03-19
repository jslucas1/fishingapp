import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppText from '../components/AppText';

function SafetyScreen(navigation) {
    return (
        <View style={styles.container}>
            <AppText>This is my safety screen</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default SafetyScreen;