/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,} from 'react-native';
import {Colors,DebugInstructions,Header,LearnMoreLinks,ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';

//Components
import ButtonPrimary from './components/ButtonPrimary';
import InputPrimary from './components/InputPrimary';
import InputHidden from './components/InputHidden';
import Test from './components/Test';
import TextButtonPrimary from './components/TextButtonPrimary';
import LogoButtonPrimary from './components/LogoButtonPrimary';

//Screens

function App(){
  const isDarkMode = useColorScheme() === 'dark';
  const [textInputValue, setTextInputValue] = useState('')

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const handleButtonPress = () => {
    console.log("Button wurde gedrückt!");
  };

  const handleInputChangeApp = (value) => {
    setTextInputValue(value);
    console.log("textInputValue in App.js:", value);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={backgroundStyle.backgroundColor}/>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <View style={{   backgroundColor: isDarkMode ? Colors.black : Colors.white, gap: 10, justifyContent:"center", alignItems:"center"}}>
          <View style={{display:"flex", width:"93%", gap:13}}>
            <Text>Test</Text>
            <InputPrimary title="Email" icon="check" onInputChange={handleInputChangeApp} disabled={true} error="" preValue="nils.morczinietz@vodafonemail.de"/>
            <InputHidden title="Passwort" icon="check" onInputChange={handleInputChangeApp} error=""/>
            <ButtonPrimary buttonText="Registrieren" isLoading={true} onPress={handleButtonPress} disabled={false}/>
            {/* <Test/> */}
            <TextButtonPrimary text="Passwort vergessen?" onPress={()=>console.log("password reset pressed")}/>
            <LogoButtonPrimary buttonText="Registrieren" isLoading={false} onPress={handleButtonPress} disabled={false}/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
