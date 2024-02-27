import { View, Text, TextInput, TouchableOpacity  } from 'react-native'
import React, { useState, useEffect } from 'react';
//Icons
import Check from '../assets/graphics/icons/check.svg';
import Exclamation from '../assets/graphics/icons/exclamation.svg';
import X from '../assets/graphics/icons/x.svg';

export default function InputPrimary({ title, error, icon, onInputChange, disabled}) {
    const [textInputValue, setTextInputValue] = useState('')
    const [isEditing, setIsEditing] = useState(false);

    const defaultBackgroundColor = 'white';
    const [inputBackgroundColor, setInputBackgroundColor] = useState(defaultBackgroundColor)

    const [inputBorderColor, setInputBorderColor] = useState('#AFAFAF')

    const [currentIcon, setCurrentIcon] = useState(null)

    //Icons
    const check = (<Check width={17} height={17}/>);
    const exclamation = (<Exclamation width={17} height={17}/>);
    const x = (<X width={20} height={20}/>);

    const handleInputChange = (text) => {
        setTextInputValue(text);
        onInputChange(text);
      };

    const handleViewClick = () => {
        setIsEditing(true);
    };

    const handleBlur = () => {
        if (textInputValue.trim() === '') {
            setIsEditing(false);
        }
    };

    useEffect(() => {
        if(error) {
            setInputBorderColor("#E14A4A")
            setCurrentIcon(exclamation)
        }
    }, [error, inputBorderColor]);

    useEffect(() => {
        if(disabled) {
            setInputBackgroundColor("rgba(175,175,175,0.28)")
            // setInputBorderColor("#AFAFAF")
        } else {
            setInputBackgroundColor(defaultBackgroundColor)
        }
    }, [disabled]);

    useEffect(() => {
        if(icon === "check") {
            setCurrentIcon(check)
            setInputBorderColor("#3D7E4F")
        } else if(icon === "exclamation") {
            setCurrentIcon(exclamation)
            setInputBorderColor("#E14A4A")
        } else if(icon === "x") {
            setCurrentIcon(x)
            setInputBorderColor("#E14A4A")
        }
        if(!icon && !error) {
            setCurrentIcon(null)
            setInputBorderColor("#AFAFAF")
        }
    }, [icon]);

    return (
        <TouchableOpacity onPress={handleViewClick} activeOpacity={1}>
            <View style={{ display: "flex", flexDirection:"row", width: "100%", height: 56, borderRadius: 11, borderColor: inputBorderColor, borderWidth:1.2, alignItems:"center", backgroundColor:inputBackgroundColor}}>
                <View style={{flex: 1, display: "flex", flexDirection:"column", paddingLeft: 8, height: "100%", justifyContent:"center", alignItems:"flex-start"}}>
                    { isEditing ?
                        <View style={{display:"flex", flexDirection:"column", height:"100%", paddingTop:6, paddingBottom:4, gap:0}}>
                            <Text style={{display:"flex", fontSize:13, fontFamily: 'Space Grotesk Medium', color:"#3D7E4F", paddingBottom:0}}>{title}</Text>
                            <TextInput
                                style={{display:"flex", fontSize: 16, fontFamily: 'Space Grotesk Regular', color:"#101010", paddingLeft:-2, textAlignVertical:"top", paddingTop: 0}}
                                value={textInputValue}
                                onChangeText={handleInputChange} //When the input is changed
                                onBlur={handleBlur} //When the input is not focused
                                autoFocus //Automatically focuses the input when accessable
                            />
                        </View>
                        :
                        <Text style={{fontSize:16, fontFamily: 'Space Grotesk Regular', color:"#101010"}}>{title}</Text>
                    }
                </View>
                <View style={{ display:"flex", width: 35, height: "100%", justifyContent:"center", alignItems:"center"}}>
                    {currentIcon && currentIcon}
                </View>
            </View>
            {error &&
            <View style={{display:"flex", height:"auto", width:"auto", marginTop:3}}>
                <Text style={{color:"#E14A4A", fontSize:13, fontFamily: 'Space Grotesk Regular'}}>{error}</Text>
            </View>}
        </TouchableOpacity>
    );
}