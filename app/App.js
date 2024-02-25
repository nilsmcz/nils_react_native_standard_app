/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,} from 'react-native';
import {Colors,DebugInstructions,Header,LearnMoreLinks,ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';

//Components
import ButtonPrimary from './components/ButtonPrimary';
import InputPrimary from './components/InputPrimary';
//Screens

function App(){
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const handleButtonPress = () => {
    console.log("Button wurde gedrückt!");
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={backgroundStyle.backgroundColor}/>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <View style={{   backgroundColor: isDarkMode ? Colors.black : Colors.white, gap: 10, justifyContent:"center", alignItems:"center"}}>
          <View style={{display:"flex", width:"95%", gap:13}}>
            <Text>Test</Text>
            <InputPrimary/>
            <ButtonPrimary buttonText="Registrieren" isLoading={false} onPress={handleButtonPress}/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
