import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

//Icons
import ArrowBack1 from '../assets/graphics/icons/arrow_back1.svg';
import ArrowNext1 from '../assets/graphics/icons/arrow_next1.svg';

export default function HeaderPrimary({ title, back, onBackClick, onNextClick, next}) {
    const arrowBack1 = (<ArrowBack1 width={9} height={15}/>);
    const arrowNext1 = (<ArrowNext1 width={9} height={15}/>);

    const handleBackClick = () => {
        onBackClick();
    }

    const handleNextClick = () => {
        onNextClick();
    }

    return (
        <View style={{ display:"flex", width:"100%", height:"auto", justifyContent:"center", alignItems:"center"}}>
            <View style={{display:"flex", width:"93%", paddingTop:15}}>
                <View style={{ display:"flex", flexDirection:"row", alignItems:"center", gap:10, width:"auto"}}>

                    <TouchableOpacity onPress={handleBackClick} activeOpacity={1}>
                        <View style={{ display:"flex", flexDirection:"row", alignItems:"center", gap:10, width:"auto"}}>
                            {arrowBack1}
                            <Text style={{  fontSize:15, fontFamily: 'Space Grotesk Medium', color:"#101010", marginBottom:2}}>{back}</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={{ display:"flex", flex:1, backgroundColor:"red"}}></View>

                    <TouchableOpacity onPress={handleNextClick} activeOpacity={1}>
                        <View style={{ display:"flex", flexDirection:"row", alignItems:"center", gap:10, width:"auto"}}>
                            <Text style={{  fontSize:15, fontFamily: 'Space Grotesk Medium', color:"#101010", marginBottom:2}}>{next}</Text>
                            {arrowNext1}
                        </View>
                    </TouchableOpacity>

                </View>
                <View style={{ display:"flex", flexDirection:"row", alignItems:"center", gap:10, marginTop:7, marginBottom:15}}>
                    <Text style={{  fontSize:23, fontFamily: 'Space Grotesk Bold', color:"#101010"}}>{title}</Text>
                </View>
            </View>
            <View style={{display:"flex", width:"100%", height:1.2, backgroundColor:"#101010"}}></View>
        </View>
    )
}