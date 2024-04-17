import { View, Text } from 'react-native'
import React from 'react'

/**
 * Divider with text in the middle
 * @param {string} text Text in the middle of the divider
 */
export default function Divider({ text }) {
    return (
        <View style={{ display:"flex", width:"100%", height:"auto", flexDirection:"row", justifyContent:"center", alignItems:"center", gap:15, paddingLeft:15, paddingRight:15}}>
            <View style={{ flex: 1, borderBottomWidth: 0.7, borderColor: '#101010' }}></View>
            <View style={{ display:"flex", height:"auto", width:"auto"}}>
                <Text style={{  fontSize:15, fontFamily: 'Space Grotesk Medium', color:"#101010"}}>
                    {text}
                </Text>
            </View>
            <View style={{ flex: 1, borderBottomWidth: 0.7, borderColor: '#101010' }}></View>
        </View>
    )
}