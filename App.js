import React, { useState, useEffect } from 'react';
import { View, StatusBar, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import VerificationScreen from './Screens/VerificationScreen';
import OnboardingScreen from './Screens/OnboardingScreen';
import HomePage from './Screens/HomePage';
import PasswordResetRequestScreen from './Screens/PasswordResetRequestScreen';
import PasswordResetScreen from './Screens/PasswordResetScreen';
import PasswordResetVerifyScreen from './Screens/PasswordResetVerifyScreen';
import PolicyScreen from './Screens/PolicyScreen';
import Profile from './Screens/Profile';
import MyAccountScreen from './Screens/MyAccountScreen';
import NotificationSettingsScreen from './Screens/NotificationSettingsScreen';
import LanguageSettingsScreen from './Screens/LanguageSettingsScreen';
import ChatbotScreen from './Screens/ChatbotScreen';
import InsuranceForm from './Screens/InsuranceForm';
import Property from './Screens/Property';
import Car from './Screens/Car';
import Fire from './Screens/Fire';
import Motor from './Screens/Motor';
import PrudentialpolicyScreen from './Screens/PrudentialpolicyScreen';
import HollardInsuranceScreen from './Screens/HollardInsuranceScreen';
import MilifepolicyScreen from './Screens/MilifepolicyScreen'
import SicpolicyScreen from './Screens/SicpolicyScreen';
import StarlifepolicyScreen from './Screens/StarlifepolicyScreen';
import StarAssuranceScreen from './Screens/StarAssuranceScreen';
import EnterprisePolicyScreen from './Screens/EnterprisePolicyScreen';
import PropertyPolicyScreen from './Screens/PropertyPolicyScreen';
import FirePolicyScreen from './Screens/FirePolicyScreen';

const Stack = createStackNavigator();


export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        SplashScreen.preventAutoHideAsync();
        await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading experience
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  useEffect(() => {
    if (appIsReady) {
      // Hide the splash screen once we are ready
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    // If the app is not ready, render a loading indicator
    // This is only necessary if you want to display something while the resources are loaded
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator>
        {/* Initially, show the LoginScreen after the splash screen */}
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Verification" component={VerificationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }} />
        <Stack.Screen name="PasswordResetRequestScreen" component={PasswordResetRequestScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PasswordResetScreen" component={PasswordResetScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PasswordResetVerifyScreen" component={PasswordResetVerifyScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PolicyScreen" component={PolicyScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name="MyAccountScreen" component={MyAccountScreen} options={{ headerShown: false }} />
        <Stack.Screen name="NotificationSettingsScreen" component={NotificationSettingsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LanguageSettingsScreen" component={LanguageSettingsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ChatbotScreen" component={ChatbotScreen} options={{ headerShown: false }} />
        <Stack.Screen name="InsuranceForm" component={InsuranceForm} options={{ headerShown: false }} />
        <Stack.Screen name="Property" component={Property} options={{ headerShown: false }} />
        <Stack.Screen name="Car" component={Car} options={{ headerShown: false }} />
        <Stack.Screen name="Fire" component={Fire} options={{ headerShown: false }} />
        <Stack.Screen name="Motor" component={Motor} options={{ headerShown: false }} />
        <Stack.Screen name="PrudentialpolicyScreen" component={PrudentialpolicyScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HollardInsuranceScreen" component={HollardInsuranceScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MilifepolicyScreen" component={MilifepolicyScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SicpolicyScreen" component={SicpolicyScreen} options={{ headerShown: false }} />
        <Stack.Screen name="StarlifepolicyScreen" component={StarlifepolicyScreen} options={{ headerShown: false }} />
        <Stack.Screen name="StarAssuranceScreen" component={StarAssuranceScreen} options={{ headerShown: false }} />
        <Stack.Screen name="EnterprisePolicyScreen" component={EnterprisePolicyScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PropertyPolicyScreen" component={PropertyPolicyScreen} options={{ headerShown: false }} />
        <Stack.Screen name="FirePolicyScreen" component={FirePolicyScreen} options={{ headerShown: false }} />
        {/* Add more screens here as needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
