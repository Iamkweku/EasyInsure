import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const MilifepolicyScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
          <Feather name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <Image source={require('../assets/Milife.png')} style={styles.logo} />
        <Text style={styles.headerTitle}>MiLife Insurance LTD</Text>
      </View>

      <Image source={require('../assets/pruImage.jpg')} style={styles.headerImage} />

      <Text style={styles.sectionTitle}>Our Products</Text>
      <Text style={styles.sectionSubtitle}>We provide various products to serve your needs</Text>

      <View style={styles.contentContainer}>
        <Text style={styles.contentTitle}>MiTribute Plan</Text>
        <Text style={styles.contentHeader}>Comprehensive Insurance Solution</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('InsuranceForm')}>
          <Text style={styles.buttonText}>BUY NOW</Text>
        </TouchableOpacity>

        <Text style={styles.contentText}>
          The MiTribute Plan from MiLife Insurance LTD is designed to offer you and your loved ones the peace of mind you deserve. This comprehensive plan is tailored to meet your individual needs and provide substantial support when it's most needed.
          {'\n\n'}
          KEY BENEFITS:
          {'\n\n'}
          • Financial Security: Ensure your family's financial stability in your absence with a cover amount of GH₵30k.
          • Affordable Premiums: Enjoy the benefits of comprehensive coverage at an affordable rate of just GH₵100/month.
          • Immediate Coverage: Get instant protection from the moment your policy is activated.
          • Flexible Terms: Customize your plan according to your personal needs and preferences.
          {'\n\n'}
          Join MiLife Insurance LTD today and secure your family's future with the MiTribute Plan, a tribute to your life and their security.
          {'\n\n'}
          Cover amount: GH₵30k
          Premium: GH₵100/month
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
  
  export default MilifepolicyScreen;