
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const EnterprisePolicyScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Car')}>
          <Feather name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <Image source={require('../assets/Enterprise.png')} style={styles.logo} />
        <Text style={styles.headerTitle}>Enterprise Insurance Limited</Text>
      </View>

      <Image source={require('../assets/pruImage.jpg')} style={styles.headerImage} />

      <Text style={styles.sectionTitle}>Our Products</Text>
      <Text style={styles.sectionSubtitle}>We provide various products to serve your needs</Text>

      <View style={styles.contentContainer}>
        <Text style={styles.contentTitle}>Car Insurance</Text>
        <Text style={styles.contentHeader}>Total Protection on the Road</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('InsuranceForm')}>
          <Text style={styles.buttonText}>GET INSURED NOW</Text>
        </TouchableOpacity>

        <Text style={styles.contentText}>
          Secure your vehicle with the Car Insurance plan from Enterprise Insurance Limited. Our policy is designed to provide total protection for your car, giving you the peace of mind you need while on the road.
        </Text>

        <Text style={styles.contentText}>KEY BENEFITS:</Text>
        <View style={styles.bulletList}>
          <Text style={styles.bulletPoint}>• Comprehensive Coverage: Ensure your car is protected with coverage up to GH₵50k for all types of incidents.</Text>
          <Text style={styles.bulletPoint}>• Competitive Premiums: Benefit from our comprehensive coverage at a premium of GH₵2k/month.</Text>
          <Text style={styles.bulletPoint}>• Hassle-free Claims Process: Experience a smooth and efficient claims process with minimal paperwork.</Text>
          <Text style={styles.bulletPoint}>• 24/7 Support: Access round-the-clock assistance for any inquiries or support you may need.</Text>
        </View>

        <Text style={styles.contentText}>
          Choose Enterprise Insurance Limited for a reliable and comprehensive car insurance policy.
          {'\n\n'}
          Cover amount: GH₵50k
          Premium: GH₵2k/month
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
   
  bulletList: {
    marginLeft: 10, // Adjust as needed
  },
  bulletPoint: {
    fontSize: 16, // Adjust as needed
    color: 'black', // Adjust as needed
    marginBottom: 10, // Adjust as needed
  },
  // ...
});


export default EnterprisePolicyScreen;
