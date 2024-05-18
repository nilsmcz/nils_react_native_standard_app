import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

import DefaultScreen from '../components/DefaultScreen';

//Components
import ButtonPrimary from '../components/ButtonPrimary';
import InputPrimary from '../components/InputPrimary';
import Divider from '../components/Divider';
import LogoButtonPrimary from '../components/LogoButtonPrimary';

export default function WelcomeScreen() {

    const { width, height } = Dimensions.get('window');

    function handleEmailInputChange(value) {
        console.log("Email Input Change:", value);
    }

    return (
        <DefaultScreen>
            <Text>Willkommen</Text>
            <InputPrimary title="Email" onInputChange={handleEmailInputChange}/>
            <ButtonPrimary buttonText="Weiter"/>
            <Divider text="oder"/>
            <LogoButtonPrimary buttonText="Mit Google anmelden"/>
        </DefaultScreen>
    )
}
