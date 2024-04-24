import React, { useState, useRef, useEffect } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

//Icons
import ArrowBack1 from '../assets/graphics/icons/arrow_back1.svg';
import ArrowNext1 from '../assets/graphics/icons/arrow_next1.svg';
import PreviewOpen from '../assets/graphics/icons/preview_open.svg';

export default function ContextBox() {

    const arrowBack1 = (<ArrowBack1 width={8} height={14}/>);
    const arrowNext1 = (<ArrowNext1 width={8} height={14}/>);
    const previewOpen = (<PreviewOpen width={25} height={25}/>);

    const [boxBorderColor, setBoxBorderColor] = useState('#AFAFAF')

    return (
        <View style={{ display: "flex", flexDirection:"column", width: "100%", height: 'auto', borderRadius: 11, borderColor:boxBorderColor, borderWidth:1.2, alignItems:"center", backgroundColor:"white", paddingLeft:17, paddingRight:17, justifyContent:"center"}}>   

            <View style={{display:"flex", paddingLeft:2, paddingRight:2}}>
                <View style={{display:"flex", flexDirection:"row", width:"100%", height:"auto", justifyContent:"center", paddingBottom:17, paddingTop:17}}>
                    <View style={{display:"flex", alignItems:"flex-start", width:35, justifyContent:"center"}}>
                        <Text>{previewOpen}</Text>
                    </View>
                    <View style={{flex:1, display:"flex", alignItems:"flex-start", justifyContent:"center"}}>
                        <Text style={{  fontSize:20, fontFamily: 'Space Grotesk Bold', color:"#101010", width:"auto"}}>Profil bearbeiten</Text>
                    </View>
                    <View style={{display:"flex", alignItems:"flex-end", width:40, justifyContent:"center"}}>
                        <Text>{arrowNext1}</Text>
                    </View>
                </View>
            </View>
            

            <View style={{display:"flex", width:"100%", height:0.8, backgroundColor:boxBorderColor}}></View>
            
            <View style={{display:"flex", paddingLeft:2, paddingRight:2}}>
                <View style={{display:"flex", flexDirection:"row", width:"100%", height:"auto", justifyContent:"center", paddingBottom:17, paddingTop:17}}>
                    <View style={{display:"flex", alignItems:"flex-start", width:35, justifyContent:"center"}}>
                        <Text>{previewOpen}</Text>
                    </View>
                    <View style={{flex:1, display:"flex", alignItems:"flex-start", justifyContent:"center"}}>
                        <Text style={{  fontSize:20, fontFamily: 'Space Grotesk Bold', color:"#101010", width:"auto"}}>Profil bearbeiten</Text>
                    </View>
                    <View style={{display:"flex", alignItems:"flex-end", width:40, justifyContent:"center"}}>
                        <Text>{arrowNext1}</Text>
                    </View>
                </View>
            </View>

            <View style={{display:"flex", width:"100%", height:0.8, backgroundColor:boxBorderColor}}></View>

            <View style={{display:"flex", paddingLeft:2, paddingRight:2}}>
                <View style={{display:"flex", flexDirection:"row", width:"100%", height:"auto", justifyContent:"center", paddingBottom:17, paddingTop:17}}>
                    <View style={{display:"flex", alignItems:"flex-start", width:35, justifyContent:"flex-start"}}>
                        <Text style={{display:"flex", marginTop:3}}>{previewOpen}</Text>
                    </View>
                    <View style={{flex:1, display:"flex", alignItems:"flex-start", justifyContent:"center", gap:5}}>
                        <Text style={{  fontSize:20, fontFamily: 'Space Grotesk Bold', color:"#101010", width:"auto"}}>Profil bearbeiten</Text>
                        <Text style={{ fontSize: 16, fontFamily: 'Space Grotesk Medium', color:"#101010", width:'auto'}}>
                            Beschreibung Beschreibung Beschreibung Beschreibung Beschreibung Beschreibung Beschreibung
                        </Text>
                    </View>
                    <View style={{display:"flex", alignItems:"flex-end", width:40, justifyContent:"center"}}>
                        <Text>{arrowNext1}</Text>
                    </View>
                </View>
            </View>

        </View>
    )
}