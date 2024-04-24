import React, { useState, useRef, useEffect } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

//Icons
import ArrowBack1 from '../assets/graphics/icons/arrow_back1.svg';
import ArrowNext1 from '../assets/graphics/icons/arrow_next1.svg';
import PreviewOpen from '../assets/graphics/icons/preview_open.svg';

export default function ContextButton({ text, error}) {

    const arrowBack1 = (<ArrowBack1 width={8} height={14}/>);
    const arrowNext1 = (<ArrowNext1 width={8} height={14}/>);
    const previewOpen = (<PreviewOpen width={25} height={25}/>);

    const errorTextColor = "#E14A4A"
    const defaultTextColor = "#101010"

    return (
        <View style={{display:"flex", flexDirection:"column", width:"100%", height:'auto', paddingLeft:10}}>
            <View style={{display:"flex", flexDirection:"row", width:"100%", height:40, alignItems:"center", gap:10}}>
                {previewOpen}
                <Text style={{  fontSize:20, fontFamily: 'Space Grotesk Bold', color: error?errorTextColor:defaultTextColor, width:"auto"}}>{text}</Text>
            </View>
            {error &&
            <View style={{display:"flex", height:"auto", width:"auto", marginTop:3}}>
                <Text style={{color:"#E14A4A", fontSize:13, fontFamily: 'Space Grotesk Regular'}}>{error}</Text>
            </View>}
        </View>
    )
}