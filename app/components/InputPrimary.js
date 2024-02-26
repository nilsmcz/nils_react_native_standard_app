import { View, Text, TextInput, TouchableOpacity  } from 'react-native'
import React, { useState } from 'react';
//Icons
import Check from '../assets/graphics/icons/check.svg';

export default function InputPrimary() {
    const [textInputValue, setTextInputValue] = useState('')
    const [isEditing, setIsEditing] = useState(false);
    const [borderColor, setBorderColor] = useState('AFAFAF')

    const handleInputChange = (text) => {
        setTextInputValue(text);
    };

    const handleViewClick = () => {
        setIsEditing(true);
    };

    const handleBlur = () => {
        if (textInputValue.trim() === '') {
            setIsEditing(false);
        }
    };
    
    return (
        <TouchableOpacity onPress={handleViewClick} activeOpacity={1}>
            <View style={{ display: "flex", flexDirection:"row", width: "100%", height: 56, borderRadius: 10, borderColor: {borderColor}, borderWidth:1.2, alignItems:"center"}}>
                <View style={{flex: 1, display: "flex", flexDirection:"column", paddingLeft: 8, height: "100%", justifyContent:"center", alignItems:"flex-start"}}>
                    { isEditing ?
                        <TextInput
                            style={{flex: 1, fontSize: 16, fontFamily: 'Space Grotesk Regular', color:"#101010"}}
                            value={textInputValue}
                            onChangeText={handleInputChange}
                            onBlur={handleBlur}
                            autoFocus
                        />
                        :
                        <Text style={{fontSize:16, fontFamily: 'Space Grotesk Regular', color:"#101010"}}>Email</Text>
                    }
                </View>
                <View style={{ display:"flex", width: 35, height: "100%", justifyContent:"center", alignItems:"center"}}>
                    <Check width={17} height={17}/>
                </View>
            </View>
        </TouchableOpacity>
    );
}