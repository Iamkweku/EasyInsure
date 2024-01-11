import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const InsuranceForm = ({ navigation }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: 'Male',
    address: '',
    contactDetails: '',
    socialSecurityNumber: '',
    driverLicenseNumber: '',
    medicalHistory: '',
    currentHealthStatus: '',
    lifestyleHabits: '',
    familyMedicalHistory: '',
    occupation: '',
    income: '',
    employmentHistory: '',
    propertyLocation: '',
    propertySize: '',
    constructionMaterials: '',
    propertyAge: '',
    propertyCondition: '',
    safetyFeatures: '',
    vehicleMake: '',
    vehicleModel: '',
    vehicleYear: '',
    vehicleSafetyFeatures: '',
    creditHistory: '',
    currentInsuranceDetails: '',
    pastInsuranceClaims: '',
    drivingHistory: '',
    areaCrimeRate: '',
    coverageType: '',
    coverageAmount: '',
    beneficiaries: '',
  });

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleGenderChange = (gender) => {
    setFormData({ ...formData, gender });
  };

  const handleSubmit = () => {
    console.log(formData);
    // Implement further submission logic here
  };

  return (
    <View style={styles.container}>
    <ScrollView style={styles.scrollView}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Feather name="arrow-left" size={24} color="black" />
      </TouchableOpacity>

      <View style={styles.formSection}>
        <Text style={styles.sectionTitle}>Personal Information</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          onChangeText={(text) => handleChange('name', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Age"
          onChangeText={(text) => handleChange('age', text)}
        />
        {/* <View>
          <Text style={styles.inputLabel}>Gender</Text>
          <TouchableOpacity onPress={() => handleGenderChange('Male')}>
            <Text style={formData.gender === 'Male' ? styles.selectedGender : styles.gender}>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleGenderChange('Female')}>
            <Text style={formData.gender === 'Female' ? styles.selectedGender : styles.gender}>Female</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleGenderChange('Other')}>
            <Text style={formData.gender === 'Other' ? styles.selectedGender : styles.gender}>Other</Text>
          </TouchableOpacity>
        </View> */}
        <TextInput
          style={styles.input}
          placeholder="Address"
          onChangeText={(text) => handleChange('address', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Contact Details"
          onChangeText={(text) => handleChange('contactDetails', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Social Security Number"
          onChangeText={(text) => handleChange('socialSecurityNumber', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Driver License Number"
          onChangeText={(text) => handleChange('driverLicenseNumber', text)}
        />
      </View>

      <View style={styles.formSection}>
        <Text style={styles.sectionTitle}>Health Information</Text>
        <TextInput
          style={styles.input}
          placeholder="Medical History"
          onChangeText={(text) => handleChange('medicalHistory', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Current Health Status"
          onChangeText={(text) => handleChange('currentHealthStatus', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Lifestyle Habits"
          onChangeText={(text) => handleChange('lifestyleHabits', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Family Medical History"
          onChangeText={(text) => handleChange('familyMedicalHistory', text)}
        />
      </View>

      <View style={styles.formSection}>
        <Text style={styles.sectionTitle}>Employment Information</Text>
        <TextInput
          style={styles.input}
          placeholder="Occupation"
          onChangeText={(text) => handleChange('occupation', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Income"
          onChangeText={(text) => handleChange('income', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Employment History"
          onChangeText={(text) => handleChange('employmentHistory', text)}
        />
      </View>

      <View style={styles.formSection}>
        <Text style={styles.sectionTitle}>Property Details</Text>
        <TextInput
          style={styles.input}
          placeholder="Property Location"
          onChangeText={(text) => handleChange('propertyLocation', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Property Size"
          onChangeText={(text) => handleChange('propertySize', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Construction Materials"
          onChangeText={(text) => handleChange('constructionMaterials', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Property Age"
          onChangeText={(text) => handleChange('propertyAge', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Property Condition"
          onChangeText={(text) => handleChange('propertyCondition', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Safety Features"
          onChangeText={(text) => handleChange('safetyFeatures', text)}
        />
      </View>
    </ScrollView>
    <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff', // Use a light background
    },
    backButton: {
      alignSelf: 'flex-start',
      marginTop: 10,
      marginLeft: 10,
      padding: 10,
    },
    formSection: {
      marginBottom: 30,
      padding: 20,
      borderRadius: 10,
      backgroundColor: '#f7f7f7', // A subtle background for each section
      shadowColor: '#000', // Adding some shadow for depth
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    sectionTitle: {
      fontSize: 22,
      fontWeight: '600',
      color: '#333',
      marginBottom: 20,
    },
    input: {
      backgroundColor: '#fff', // White background for inputs
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 8,
      fontSize: 16,
      padding: 15,
      marginBottom: 15,
    },
    inputLabel: {
      fontSize: 18,
      fontWeight: '500',
      marginBottom: 10,
      color: '#333',
    },
    gender: {
      fontSize: 16,
      padding: 10,
      color: '#333',
    },
    selectedGender: {
      fontSize: 16,
      padding: 10,
      color: '#0052A4', // Highlight color for selection
      fontWeight: 'bold',
    },
    submitButton: {
      backgroundColor: '#0052A4', // Button color that stands out
      paddingVertical: 15,
      paddingHorizontal: 30,
      borderRadius: 8,
      alignItems: 'center',
      marginTop: 30,
    },
    submitButtonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    // ... (add other styles for new UI elements you introduce)
  });
  
  export default InsuranceForm;