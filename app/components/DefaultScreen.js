import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function DefaultScreen ({ children }) {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // Nimmt den gesamten verfügbaren Platz ein
        flexDirection: "column", //Unterelemente werden in einer Spalte angeordnet
        paddingTop: 16, //Abstand oben
        paddingLeft: 24, //Abstand links
        paddingRight: 24, //Abstand rechts
        width: width, //Breite des Bildschirms
        height: height, //Höhe des Bildschirms
    },
});