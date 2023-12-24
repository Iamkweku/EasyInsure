import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';

const MyAccountScreen = ({ navigation }) => {
    // Mocked current user details (Replace with actual data retrieval logic)
    const currentUserDetails = {
        username: 'currentUsername',
        email: 'user@example.com',
        password: 'password123',
        phone: '1234567890',
        firstName: 'John',
        lastName: 'Doe',
        middleName: 'C',
    };

    const [accountDetails, setAccountDetails] = useState(currentUserDetails);

    const handleUpdate = () => {
        // Handle the account update logic
        Alert.alert('Info', 'Account details updated');
    };

    const handleDeleteAccount = () => {
        // Handle the account deletion logic
        Alert.alert('Confirm', 'Are you sure you want to delete your account?', [
          { text: 'Cancel', style: 'cancel' },
          { text: 'Delete', onPress: () => console.log('Account deletion process') },
        ]);
    };

    return (
        <View style={styles.container}>
            <Feather name="arrow-left" size={24} color="black" onPress={() => navigation.navigate('Profile')} style={styles.backIcon} />
            <Text style={styles.title}>Edit My Account</Text>
            
            {/* Form fields */}
            {Object.keys(accountDetails).map((key) => (
                <TextInput 
                    key={key}
                    style={styles.input} 
                    placeholder={key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')} 
                    value={accountDetails[key]} 
                    onChangeText={(text) => setAccountDetails({...accountDetails, [key]: text})}
                    secureTextEntry={key === 'password'}
                    keyboardType={key === 'email' ? 'email-address' : key === 'phone' ? 'phone-pad' : 'default'}
                />
            ))}

            <TouchableOpacity style={styles.updateButton} onPress={handleUpdate}>
                <Text style={styles.buttonText}>Update Details</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.deleteAccount} onPress={handleDeleteAccount}>
                <Text style={styles.deleteText}>Delete My Account</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    backIcon: {
        marginTop: 50,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#07A4DB',
        padding: 15,
        marginBottom: 15,
        borderRadius: 8,
        fontSize: 16,
    },
    updateButton: {
        backgroundColor: '#0052A4',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    deleteAccount: {
        padding: 15,
        backgroundColor: 'red',
        borderRadius: 8,
        alignItems: 'center',
    },
    deleteText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default MyAccountScreen;
