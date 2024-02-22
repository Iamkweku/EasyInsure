import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const StarAssuranceScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Motor')}>
          <Feather name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <Image source={require('../assets/StarAssurance.png')} style={styles.logo} />
        <Text style={styles.headerTitle}>Star Assurance LTD</Text>
      </View>

      <Image source={require('../assets/pruImage.jpg')} style={styles.headerImage} />

      <Text style={styles.sectionTitle}>Our Products</Text>
      <Text style={styles.sectionSubtitle}>We provide various products to serve your needs</Text>

      <View style={styles.contentContainer}>
        <Text style={styles.contentTitle}>Third Party Fire and Theft Policy</Text>
        <Text style={styles.contentHeader}>Comprehensive Vehicle Protection</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('InsuranceForm')}>
          <Text style={styles.buttonText}>GET COVERED NOW</Text>
        </TouchableOpacity>

        <Text style={styles.contentText}>
          Protect your vehicle against unforeseen circumstances with the Third Party Fire and Theft Policy from Star Assurance LTD. Our policy provides robust protection, ensuring you're covered against third-party damages, fire-related incidents, and theft.
        </Text>

        <Text style={styles.contentText}>KEY BENEFITS:</Text>
        <View style={styles.bulletList}>
          <Text style={styles.bulletPoint}>• Comprehensive Cover: Receive up to GH₵10k in coverage for any third-party liabilities, fire damage, or theft.</Text>
          <Text style={styles.bulletPoint}>• Affordable Premiums: Enjoy extensive protection at an affordable rate of GH₵120/month.</Text>
          <Text style={styles.bulletPoint}>• Instant Coverage: Benefit from immediate protection from the moment your policy is activated.</Text>
          <Text style={styles.bulletPoint}>• Peace of Mind: Drive with confidence knowing that you're protected against a range of risks.</Text>
        </View>

        <Text style={styles.contentText}>
          Choose Star Assurance LTD for reliable and comprehensive vehicle protection with our Third Party Fire and Theft Policy.
          {'\n\n'}
          Cover amount: GH₵10k
          Premium: GH₵120/month
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

export default StarAssuranceScreen;
