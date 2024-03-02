import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native'
import React from 'react'

export default function LogoButtonPrimary({ buttonText, isLoading, onPress, disabled}) {
    
    const handlePress = () => {
        if (onPress && !disabled && !isLoading) {
            onPress();
        }
    };

    return (
        //activeOpacity is the opacity of the button when it is pressed
        <TouchableOpacity onPress={handlePress} activeOpacity={1.0}> 
            <View style={{ display: "flex", width: "100%", height: 56, borderRadius: 11, backgroundColor: "white", justifyContent:"center", alignItems:"center", borderColor:"#101010", borderStyle:"solid", borderWidth:1.3}}>
                <View style={{ display: "flex", flexDirection: "row", gap: 7}}>
                    {isLoading && <ActivityIndicator size="small" color="#101010" />}
                    <Text>Icon</Text>
                    <Text style={{fontSize:15, fontFamily: 'Space Grotesk Medium', color:"#101010"}}>{buttonText}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}