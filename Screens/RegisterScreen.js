import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';

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

  const handleSignUp = () => {
    // Implement your sign-up logic here
    navigation.navigate('Verification');
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
