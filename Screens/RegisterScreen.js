import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import axios from 'axios';

const InputField = ({ iconName, placeholder, secureTextEntry, value, onChangeText, keyboardType }) => (
  <View style={styles.inputContainer}>
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      autoCapitalize="none"
    />
    <Feather name={iconName} size={20} color="grey" style={styles.icon} />
  </View>
);

const RegisterScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await axios.post('https://a6f3-197-255-118-231.ngrok-free.app/register', {
        fullName: fullName,
        email: email,
        phoneNumber: phoneNumber,
        password: password,
      });

      const data = response.data;
      if (data && data.token) {
        console.log(data.token); // Use the token as needed
        navigation.navigate('Verification', {
          email: email
        });
      } else {
        console.log('Registration failed:', data);
        alert('Registration failed. Please try again.');
      }
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Server response error:', error.response.status, error.response.data);
        alert(`Error: ${error.response.status} - ${error.response.data}`);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('Request made but no response:', error.request);
        alert('No response from the server. Please check your network connection.');
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error in setting up request:', error.message);
        alert('Error: ' + error.message);
      }
    }
  };
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Get Started</Text>
      <Text style={styles.subtitle}>by creating a free account.</Text>

      <InputField
        iconName="user"
        placeholder="Full name"
        value={fullName}
        onChangeText={setFullName}
      />

      <InputField
        iconName="mail"
        placeholder="Valid email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <InputField
        iconName="phone"
        placeholder="Phone number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />

      <InputField
        iconName="lock"
        placeholder="Strong Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.signInText}>Already a member? Log In</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: 'gray',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#07A4DB',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    marginRight: 10,
  },
  icon: {
    marginRight: 10,
  },
  signUpButton: {
    backgroundColor: '#437E9B',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  signUpButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
  signInText: {
    marginTop: 20,
    textAlign: 'center',
    color: '#07A4DB',
  },
});

export default RegisterScreen;
