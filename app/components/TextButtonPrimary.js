import { View, Text, TouchableOpacity  } from 'react-native'
import React from 'react'

export default function TextButtonPrimary({ text, onPress}) {

    const handleViewClick = () => {
        onPress();
    }

    return (
        <View style={{ display: "flex", width:"100%", alignItems:"center"}}>
            <TouchableOpacity onPress={handleViewClick} activeOpacity={1}>
                <Text style={{  fontSize:15, fontFamily: 'Space Grotesk SemiBold', color:"#3D7E4F"}}>
                    {text}
                </Text>
            </TouchableOpacity>
        </View>
    )
}