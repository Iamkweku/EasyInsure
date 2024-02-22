import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const SicpolicyScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
          <Feather name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <Image source={require('../assets/Sic.jpg')} style={styles.logo} />
        <Text style={styles.headerTitle}>SIC Insurance LTD</Text>
      </View>

      <Image source={require('../assets/pruImage.jpg')} style={styles.headerImage} />

      <Text style={styles.sectionTitle}>Our Products</Text>
      <Text style={styles.sectionSubtitle}>We provide various products to serve your needs</Text>

      <View style={styles.contentContainer}>
        <Text style={styles.contentTitle}>Life Insurance</Text>
        <Text style={styles.contentHeader}>Secure Your Future</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('InsuranceForm')}>
          <Text style={styles.buttonText}>ENROLL NOW</Text>
        </TouchableOpacity>

        <Text style={styles.contentText}>
          Secure your family's future with the Life Insurance plan from SIC Insurance LTD. Our Life Insurance plan is tailored to offer you peace of mind, ensuring that your loved ones are taken care of in your absence.
          {'\n\n'}
          KEY BENEFITS:
          {'\n\n'}
          • Financial Security: A solid safety net of GH₵10k to protect your family's future.
          • Affordable Premiums: Benefit from our plan at a manageable rate of GH₵20/month.
          • Immediate Support: Get immediate coverage from the moment your policy is active.
          • Customizable Options: Tailor your policy to fit your unique needs and lifestyle.
          {'\n\n'}
          Choose SIC Insurance LTD today and invest in a future where your loved ones are financially secure with our Life Insurance plan.
          {'\n\n'}
          Cover amount: GH₵10k
          Premium: GH₵20/month
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'blue',
      padding: 20,
      marginTop: 50,
    },
    logo: {
      width: 40, // Adjust the width as needed
      height: 40, // Adjust the height as needed
      marginRight: 10, // Add some margin between logo and title
      resizeMode: 'contain',
      marginLeft: 8,
    },
    headerTitle: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20,
      marginLeft: 8,
    },
    headerImage: {
      width: '100%',
      height: 200, // Adjust the height as needed
      
    },
    sectionTitle: {
      color: 'red',
      fontSize: 24,
      fontWeight: 'bold',
      marginVertical: 10,
      marginLeft: 20,
    },
    sectionSubtitle: {
      color: 'black',
      fontSize: 18,
      marginBottom: 20,
      marginLeft: 20,
    },
    contentContainer: {
      paddingHorizontal: 20,
    },
    contentTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333',
    },
    contentHeader: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#0052A4',
      marginVertical: 10,
    },
    button: {
      backgroundColor: '#0052A4',
      padding: 15,
      borderRadius: 5,
      alignItems: 'center',
      marginBottom: 20,
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
    contentText: {
      fontSize: 16,
      color: 'black',
      marginBottom: 20,
    },
  });
  
  export default SicpolicyScreen;