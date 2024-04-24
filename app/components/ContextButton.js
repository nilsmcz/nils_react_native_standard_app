import React, { useState, useRef, useEffect } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

//Icons
import ArrowBack1 from '../assets/graphics/icons/arrow_back1.svg';
import ArrowNext1 from '../assets/graphics/icons/arrow_next1.svg';
import PreviewOpen from '../assets/graphics/icons/preview_open.svg';

export default function ContextButton({ text }) {

    const arrowBack1 = (<ArrowBack1 width={8} height={14}/>);
    const arrowNext1 = (<ArrowNext1 width={8} height={14}/>);
    const previewOpen = (<PreviewOpen width={25} height={25}/>);

    return (
        <View style={{display:"flex", flexDirection:"row", width:"100%", height:56, alignItems:"center", gap:10, paddingLeft:10}}>
            {previewOpen}
            <Text style={{  fontSize:20, fontFamily: 'Space Grotesk Bold', color:"#101010", width:"auto"}}>{text}</Text>
        </View>
    )
}