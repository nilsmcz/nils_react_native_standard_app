import React, { useState, useRef, useEffect } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

/**
 * Code input field with 5 characters
 * @param {string} defaultValue Default value of the input
 * @param {function} onInputChange Function that is called when the input changes
 * @param {string} value Value of the input 
 */
export default function CodePrimary({ defaultValue, onInputChange, value}) {
  const startValue = defaultValue ? defaultValue : ''; 
  const [inputValues, setInputValues] = useState([startValue, startValue, startValue, startValue, startValue]);
  const inputRefs = inputValues.map(() => useRef(null));

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
    <View style={styles.container}>
      {inputValues.map((value, index) => (
        <TextInput
          key={index}
          ref={inputRefs[index]}
          style={styles.input}
          value={value}
          onChangeText={(text) => handleChangeText(index, text)}
          maxLength={1} // Begrenze die Länge auf 1 Zeichen
          onFocus={() => handleFocus(index)}
          onBlur={() => handleBlur(index)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    height: 56,
  },
  input: {
    height: '100%',
    width: 56,
    borderRadius: 11,
    borderColor: '#AFAFAF',
    borderWidth: 1.2,
    fontSize: 16,
    fontFamily: 'Space Grotesk Regular',
    color: '#101010',
    textAlign: 'center',
  },
});
