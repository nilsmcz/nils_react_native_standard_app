import React, { useState, useRef, useEffect } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';


export default function ContextDividerTitle({ text }) {
    return (
        <View>
            <Text style={{  fontSize:17, fontFamily: 'Space Grotesk Bold', color:"#AFAFAF", width:"auto"}}>{text}</Text>
        </View>
    )
}