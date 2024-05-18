import React, { useState, useRef, useEffect } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

/**
 * Code input field with 5 characters
 * @param {string} defaultValue Default value of the input
 * @param {function} onInputChange Function that is called when the input changes
 * @param {string} value Value of the input 
 */
export default function CodePrimary({ defaultValue, onInputChange, value, error}) {
  const startValue = defaultValue ? defaultValue : ''; 
  const [inputValues, setInputValues] = useState([startValue, startValue, startValue, startValue, startValue]);
  const inputRefs = inputValues.map(() => useRef(null));
  const [inputBorderColor, setInputBorderColor] = useState('#AFAFAF')

  useEffect(() => {
    if(value) {
      const valueArray = value.split('');
      const newInputValues = [...inputValues];
      valueArray.forEach((val, index) => {
        newInputValues[index] = val;
      });
      setInputValues(newInputValues);
    }
  } , [value]);

  useEffect(() => {
    // Hier wird die Initialisierung der Refs durchgeführt, nachdem die Komponente gerendert wurde
    inputRefs.forEach((ref, index) => {
      if (ref.current) {
        ref.current.index = index;
      }
    });
  }, []);

  useEffect(() => {
    if(error) {
      setInputBorderColor("#E14A4A")
    } else {
      setInputBorderColor("#AFAFAF")
    }
}, [error, inputBorderColor]);

  const handleChangeText = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;

    // Logik zum automatischen Springen zum nächsten TextInput
    if (value !== '' && index < inputValues.length - 1) {
      const nextIndex = index + 1;
      if (inputRefs[nextIndex] && inputRefs[nextIndex].current) {
        // Timeout hinzufügen, um sicherzustellen, dass die Komponente vollständig gerendert wurde
        setTimeout(() => {
          inputRefs[nextIndex].current.focus();
        }, 0);
      }
    }

    setInputValues(newInputValues);
    onInputChange(newInputValues.join(''));
  };

  const handleFocus = (index) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = '';
    setInputValues(newInputValues);
  };

  const handleBlur = (index) => {
    const newInputValues = [...inputValues];
    if (!newInputValues[index]) {
      newInputValues[index] = defaultValue;
    }
    setInputValues(newInputValues);
  };

  return (
    <View style={{flexDirection: 'column', width: '100%', height: 'auto'}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-around', width: '100%', height: 56}}>
        {inputValues.map((value, index) => (
          <TextInput
            key={index}
            ref={inputRefs[index]}
            style={{height: '100%', width: 56, borderRadius: 11, borderColor: inputBorderColor, borderWidth: 1.2, fontSize: 16, fontFamily: 'Space Grotesk Regular', color: '#101010', textAlign: 'center'}}
            value={value}
            onChangeText={(text) => handleChangeText(index, text)}
            maxLength={1} // Begrenze die Länge auf 1 Zeichen
            onFocus={() => handleFocus(index)}
            onBlur={() => handleBlur(index)}
          />
        ))}
      </View>
      {error &&
      <View style={{display:"flex", height:"auto", width:"auto", marginTop:3}}>
        <Text style={{color:"#E14A4A", fontSize:13, fontFamily: 'Space Grotesk Regular'}}>{error}</Text>
      </View>}
    </View>
  );
}