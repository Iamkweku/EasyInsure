import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';

const InputField = ({ iconName, placeholder, value, onChangeText, keyboardType }) => (
  <View style={styles.inputContainer}>
    <Feather name={iconName} size={22} color="#7A7A7A" style={styles.icon} />
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
      keyboardType={keyboardType}
      autoCapitalize="none"
      placeholderTextColor="#7A7A7A"
    />
  </View>
);

const AccountEditScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  // Dummy function for example purposes
  const handleUpdate = async () => {
    // Implement your update logic here
    // This should likely be an API call
  };

  return (
    <SafeAreaView style={styles.container}>
       
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Feather name="arrow-left" size={24} color="#000" style={styles.backIcon} onPress={() => navigation.goBack()} />

        <Text style={styles.title}>Edit Your Account</Text>

        <InputField
          iconName="user"
          placeholder="Full name"
          value={fullName}
          onChangeText={setFullName}
        />

        <InputField
          iconName="mail"
          placeholder="Email"
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

        <TouchableOpacity style={styles.updateButton} onPress={handleUpdate}>
          <Text style={styles.updateButtonText}>Update Details</Text>
        </TouchableOpacity>
      </ScrollView>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA', // Light grey background for the screen
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  backgroundImage: {
    flex: 1, // ImageBackground should occupy the entire space of its container
  },
  backIcon: {
    marginTop: -400,
    marginLeft: 10,
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333', // Darker text for better readability
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  icon: {
    marginRight: 10,
  },
  updateButton: {
    backgroundColor: '#5C6DF8', // A pleasant blue for the button
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  updateButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default AccountEditScreen;
