import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ButtonPrimary({ buttonText, isLoading, onPress }) {
    
    const handlePress = () => {
        if (onPress) {
            onPress();
        }
    };

    return (
        //activeOpacity is the opacity of the button when it is pressed
        <TouchableOpacity onPress={handlePress} activeOpacity={1.0}> 
            <View style={{ display: "flex", width: "100%", height: 56, borderRadius: 11, backgroundColor: "#101010", justifyContent:"center", alignItems:"center"}}>
                <View style={{ display: "flex", flexDirection: "row", gap: 7}}>
                    {isLoading && <ActivityIndicator size="small" color="#FFFFFF" />}
                    <Text style={{fontSize:15, fontFamily: 'Space Grotesk Medium', color:"#FFFFFF"}}>{buttonText}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}